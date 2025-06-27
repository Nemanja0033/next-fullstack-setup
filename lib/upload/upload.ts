import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import axios from 'axios'

// Ensure you have initialized Firebase && Cloudinary in your project before using this code

const storage = getStorage()
// Api for file uploads
export async function uploadFile(file: File, path = 'uploads') {
  const fileRef = ref(storage, `${path}/${file.name}`)
  await uploadBytes(fileRef, file)
  const url = await getDownloadURL(fileRef)
  return url
}

// Api for image uploads to Cloudinary
export const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'exmaple_preset'); // Replace with your Cloudinary upload preset
    
    try {
        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/demo/image/upload', // Replace with your Cloudinary URL
            formData
        );
        return response.data.secure_url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};