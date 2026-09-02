export type Recipe = {
  id: string;
  name: string;
  region: string;
  category: 'kue' | 'makanan-berat';
  duration: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  isPremium: boolean;
  imageUrl: string;
  servings?: string;
  rating?: number;
  ingredients?: string[];
  instructions?: string[];
};

export const dummyRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Klepon Pandan Lumer',
    region: 'Jawa Tengah',
    category: 'kue',
    duration: '30 mnt',
    difficulty: 'Mudah',
    isPremium: false,
    imageUrl: 'https://picsum.photos/seed/klepon/400/300',
    servings: '12 Porsi',
    rating: 4.8,
    ingredients: ['200g Tepung Ketan', '100ml Air Pandan', 'Gula Merah sisir', 'Kelapa Parut Kukus'],
    instructions: ['Campur tepung ketan & air pandan.', 'Bentuk bulat & isi gula merah.', 'Rebus hingga mengapung.', 'Baluri kelapa parut.']
  },
  {
    id: '2',
    name: 'Rendang Sapi Daging Empuk',
    region: 'Minangkabau',
    category: 'makanan-berat',
    duration: '3 jam',
    difficulty: 'Sulit',
    isPremium: true,
    imageUrl: 'https://picsum.photos/seed/rendang/400/300',
    servings: '6 Porsi',
    rating: 4.9,
    ingredients: ['1kg Daging Sapi', '1L Santan Kental', 'Bumbu Halus Rendang', 'Daun Kunyit & Serai'],
    instructions: ['Tumis bumbu halus hingga harum.', 'Masukkan daging & santan.', 'Aduk terus dengan api kecil hingga minyak keluar & menghitam.']
  },
  {
    id: '3',
    name: 'Serabi Kuah Kencana',
    region: 'Bandung',
    category: 'kue',
    duration: '45 mnt',
    difficulty: 'Sedang',
    isPremium: false,
    imageUrl: 'https://picsum.photos/seed/serabi/400/300',
    servings: '8 Porsi',
    rating: 4.7,
    ingredients: ['Tepung Beras', 'Santan', 'Ragi', 'Gula Merah untuk kuah kinca'],
    instructions: ['Aduk adonan serabi & diamkan 30m.', 'Panggang di cetakan tanah clay.', 'Sajikan dengan kuah kinca hangat.']
  },
  {
    id: '4',
    name: 'Soto Ayam Lamongan',
    region: 'Jawa Timur',
    category: 'makanan-berat',
    duration: '1 jam',
    difficulty: 'Sedang',
    isPremium: false,
    imageUrl: 'https://picsum.photos/seed/soto/400/300',
    servings: '4 Porsi',
    rating: 4.8,
    ingredients: ['1 ekor Ayam Kampung', 'Bumbu Soto Kuning', 'Koya Udang', 'Soun & Kol'],
    instructions: ['Rebus ayam bersama bumbu halus.', 'Goreng ayam sebentar lalu suwir.', 'Sajikan kuah panas dengan taburan koya renyah.']
  },
  {
    id: '5',
    name: 'Nastar Wisman Keju',
    region: 'Nasional',
    category: 'kue',
    duration: '2 jam',
    difficulty: 'Sedang',
    isPremium: true,
    imageUrl: 'https://picsum.photos/seed/nastar/400/300',
    servings: '2 Toples',
    rating: 4.9,
    ingredients: ['Mentega Wisman', 'Tepung Terigu', 'Selai Nanas Daging', 'Kuning Telur Olesan'],
    instructions: ['Kocok mentega & kuning telur.', 'Bentuk bulat isi selai nanas.', 'Oles kuning telur & panggang hingga keemasan.']
  },
  {
    id: '6',
    name: 'Gudeg Yogya Komplit',
    region: 'Yogyakarta',
    category: 'makanan-berat',
    duration: '4 jam',
    difficulty: 'Sulit',
    isPremium: true,
    imageUrl: 'https://picsum.photos/seed/gudeg/400/300',
    servings: '5 Porsi',
    rating: 4.9,
    ingredients: ['Nangka Muda', 'Gula Jawa', 'Santan', 'Telur Bacem & Ayam'],
    instructions: ['Ungkep nangka muda dengan bumbu & daun jati.', 'Masak dengan api sangat kecil hingga bumbu meresap & mengering.']
  },
  {
    id: '7',
    name: 'Kue Lumpur Surabi',
    region: 'Sidoarjo',
    category: 'kue',
    duration: '40 mnt',
    difficulty: 'Mudah',
    isPremium: false,
    imageUrl: 'https://picsum.photos/seed/lumpur/400/300',
    servings: '10 Porsi',
    rating: 4.6,
    ingredients: ['Kentang Kukus', 'Santan', 'Tepung Terigu', 'Kismis'],
    instructions: ['Blender kentang dan santan.', 'Campur terigu, panggang di cetakan kue lumpur.', 'Beri topping kismis di atasnya.']
  },
  {
    id: '8',
    name: 'Ayam Betutu Gilimanuk',
    region: 'Bali',
    category: 'makanan-berat',
    duration: '2.5 jam',
    difficulty: 'Sulit',
    isPremium: false,
    imageUrl: 'https://picsum.photos/seed/betutu/400/300',
    servings: '4 Porsi',
    rating: 4.8,
    ingredients: ['Ayam Utuh', 'Base Genep Bali', 'Daun Pisang Pembungkus'],
    instructions: ['Baluri ayam dengan Bumbu Base Genep.', 'Bungkus rapi dengan daun pisang.', 'Kukus lalu panggang hingga harum.']
  },
  {
    id: '9',
    name: 'Kue Lapis Legit Spesial',
    region: 'Lampung/Palembang',
    category: 'kue',
    duration: '3 jam',
    difficulty: 'Sulit',
    isPremium: true,
    imageUrl: 'https://picsum.photos/seed/lapis/400/300',
    servings: '1 Loyang',
    rating: 5.0,
    ingredients: ['30 Kuning Telur', 'Butter berkualitas', 'Spekoek', 'Susu Kental Manis'],
    instructions: ['Kocok telur & butter.', 'Panggang selapis demi selapis dengan api atas oven hingga kecokelatan.']
  },
  {
    id: '10',
    name: 'Pempek Palembang Asli',
    region: 'Palembang',
    category: 'makanan-berat',
    duration: '1.5 jam',
    difficulty: 'Sedang',
    isPremium: false,
    imageUrl: 'https://picsum.photos/seed/pempek/400/300',
    servings: '15 Biji',
    rating: 4.9,
    ingredients: ['Daging Ikan Tenggiri', 'Tepung Sagu', 'Air Es', 'Cuko Asam Pedas'],
    instructions: ['Aduk ikan dan air es, tambah sagu bertahap.', 'Bentuk kapal selam/lenjer, rebus.', 'Goreng dan sajikan bersama cuko.']
  }
];