import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// Ensure you have initialized Firebase in your project before using this code

const storage = getStorage()

export async function uploadFile(file: File, path = 'uploads') {

  const fileRef = ref(storage, `${path}/${file.name}`)
  await uploadBytes(fileRef, file)
  const url = await getDownloadURL(fileRef)
  return url
}
