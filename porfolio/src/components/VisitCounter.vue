<template>
  <div
    v-if="showCounter"
    class="fixed bottom-4 right-4 bg-[#0A0A0A] text-[#C6FF00] px-4 py-2 rounded-full text-sm font-mono border border-[#C6FF00] z-50 shadow-lg"
  >
    {{ copy.counter.visits }} : {{ count }}
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, increment, updateDoc, getDoc, setDoc } from 'firebase/firestore'
import { copy } from '@/content'

const count = ref(0)
const showCounter = ref(false)

// 1. Vérifier si l'utilisateur est "admin" via paramètre d'URL
const isAdmin = () => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('admin') === 'showcounter'
}

// 2. Raccourci clavier Ctrl+Shift+V pour afficher/masquer
const handleKeydown = (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'V') {
    showCounter.value = !showCounter.value
  }
}

// 3. Charger la config Firebase depuis le fichier public
const loadFirebaseConfig = async () => {
  try {
    const response = await fetch('/counterporfolio-firebase.json')
    if (!response.ok) throw new Error('Impossible de charger la config Firebase')
    return await response.json()
  } catch (error) {
    console.error('Erreur chargement config Firebase:', error)
    return null
  }
}

// 4. Initialiser Firebase et incrémenter le compteur
const initCounter = async () => {
  const config = await loadFirebaseConfig()
  if (!config) return

  // Initialiser Firebase
  const app = initializeApp(config)
  const db = getFirestore(app)
  const docRef = doc(db, 'counters', 'visits')

  try {
    // Vérifier si le document existe
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      // Créer le document avec count = 1
      await setDoc(docRef, { count: 1 })
      count.value = 1
    } else {
      // Incrémenter le compteur
      await updateDoc(docRef, { count: increment(1) })
      const newSnap = await getDoc(docRef)
      count.value = newSnap.data().count
    }
  } catch (error) {
    console.error('Erreur Firestore:', error) 
  }
}

onMounted(async () => {
  await initCounter()
  showCounter.value = isAdmin()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>