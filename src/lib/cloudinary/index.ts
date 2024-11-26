export const uploadImage = async (file: File): Promise<string> => {
  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
  const CLOUDINARY_PRESET =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_PRESET);

  try {
    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error al subir la imagen");
    }

    const data = await response.json();
    return data.secure_url; // Devuelve la URL segura de la imagen
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};
