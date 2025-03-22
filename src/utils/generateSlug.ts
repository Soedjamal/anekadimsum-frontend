export const generateSlug = (name: string) => {
  return name
    .toLowerCase() // Ubah ke huruf kecil
    .replace(/[^a-z0-9\s-]/g, "") // Hapus karakter khusus
    .replace(/\s+/g, "-") // Ganti spasi dengan tanda "-"
    .trim();
};
