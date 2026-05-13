const songs = [
    {
        "artist":  "Royalty Free",
        "title":  "VibeTune Fusion",
        "url":  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "id":  9991,
        "cover":  "https://images.unsplash.com/photo-1514525253348-8d9407c520b5?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Royalty Free",
        "title":  "Tamil Folk Rhythm",
        "url":  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "id":  9992,
        "cover":  "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Royalty Free",
        "title":  "Indian Cinematic Beat",
        "url":  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "id":  9993,
        "cover":  "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&h=500&fit=crop"
    }
,
    {
        "artist":  "Unknown Artist",
        "title":  "Kaattu Payale",
        "url":  "songs/Kaattu Payale.mp3",
        "id":  1,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kadhaippoma",
        "url":  "songs/Kadhaippoma.mp3",
        "id":  2,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Nira",
        "url":  "songs/Nira.mp3",
        "id":  3,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kaathodu Kaathanen",
        "url":  "songs/Kaathodu Kaathanen.mp3",
        "id":  4,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Tharam Maara Single",
        "url":  "songs/Tharam Maara Single.mp3",
        "id":  5,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Unna Nenachu",
        "url":  "songs/Unna Nenachu.mp3",
        "id":  6,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sandakari Neethan",
        "url":  "songs/Sandakari Neethan.mp3",
        "id":  7,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kadhal Ondru Kanden - Kanna Veesi Video Song",
        "url":  "songs/Kadhal Ondru Kanden - Kanna Veesi Video Song.mp3",
        "id":  8,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kanna Thoodhu Po Da",
        "url":  "songs/Kanna Thoodhu Po Da.mp3",
        "id":  9,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kannam Adhil Vannam",
        "url":  "songs/Kannam Adhil Vannam.mp3",
        "id":  10,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kulfi Kuchchi",
        "url":  "songs/Kulfi Kuchchi.mp3",
        "id":  11,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oho Endhan Baby",
        "url":  "songs/Oho Endhan Baby.mp3",
        "id":  12,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oh Azhage",
        "url":  "songs/Oh Azhage.mp3",
        "id":  13,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Haiyo Haiyo",
        "url":  "songs/Haiyo Haiyo.mp3",
        "id":  14,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Theeraamal",
        "url":  "songs/Theeraamal.mp3",
        "id":  15,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Unnaal Penne",
        "url":  "songs/Unnaal Penne.mp3",
        "id":  16,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ennai Vittu",
        "url":  "songs/Ennai Vittu.mp3",
        "id":  17,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kanave Nee Naan",
        "url":  "songs/Kanave Nee Naan.mp3",
        "id":  18,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kutti Story",
        "url":  "songs/Kutti Story_1.mp3",
        "id":  19,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Veyyon Silli",
        "url":  "songs/Veyyon Silli.mp3",
        "id":  20,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Gaandu Kannamma",
        "url":  "songs/Gaandu Kannamma.mp3",
        "id":  21,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Menaminiki",
        "url":  "songs/Menaminiki.mp3",
        "id":  22,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Neeye Neeye",
        "url":  "songs/Neeye Neeye.mp3",
        "id":  23,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Dhom Dhom",
        "url":  "songs/Dhom Dhom.mp3",
        "id":  24,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Azhagu",
        "url":  "songs/Azhagu.mp3",
        "id":  25,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Maalai Varum Vennila",
        "url":  "songs/Maalai Varum Vennila.mp3",
        "id":  26,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Neenga Mudiyuma",
        "url":  "songs/Neenga Mudiyuma.mp3",
        "id":  27,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Piriyadha Enna",
        "url":  "songs/Piriyadha Enna.mp3",
        "id":  28,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thaalelo",
        "url":  "songs/Thaalelo.mp3",
        "id":  29,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Chill Bro",
        "url":  "songs/Chill Bro.mp3",
        "id":  30,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Jigidi Killaadi",
        "url":  "songs/Jigidi Killaadi.mp3",
        "id":  31,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Morattu Thamizhan Da",
        "url":  "songs/Morattu Thamizhan Da.mp3",
        "id":  32,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mavane",
        "url":  "songs/Mavane.mp3",
        "id":  33,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Arakki",
        "url":  "songs/Arakki.mp3",
        "id":  34,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Dhooram",
        "url":  "songs/Dhooram.mp3",
        "id":  35,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Chumma Kizhi",
        "url":  "songs/Chumma Kizhi.mp3",
        "id":  36,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thani Vazhi",
        "url":  "songs/Thani Vazhi.mp3",
        "id":  37,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Dumm Dumm",
        "url":  "songs/Dumm Dumm.mp3",
        "id":  38,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Darbar Punch",
        "url":  "songs/Darbar Punch.mp3",
        "id":  39,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kannula Thimiru",
        "url":  "songs/Kannula Thimiru.mp3",
        "id":  40,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaanam Thilathilaka",
        "url":  "songs/Vaanam Thilathilaka.mp3",
        "id":  41,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Orey Oru",
        "url":  "songs/Orey Oru.mp3",
        "id":  42,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Idhayame",
        "url":  "songs/Idhayame.mp3",
        "id":  43,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Agalaathey",
        "url":  "songs/Agalaathey.mp3",
        "id":  44,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaanil Irul",
        "url":  "songs/Vaanil Irul.mp3",
        "id":  45,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thee Mugam Dhaan",
        "url":  "songs/Thee Mugam Dhaan.mp3",
        "id":  46,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kaana Karunguyile",
        "url":  "songs/Kaana Karunguyile.mp3",
        "id":  47,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Yandii",
        "url":  "songs/Yandii.mp3",
        "id":  48,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vera Level",
        "url":  "songs/Vera Level.mp3",
        "id":  49,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Over\u0027a Feel Pannuren",
        "url":  "songs/Over\u0027a Feel Pannuren.mp3",
        "id":  50,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Malto Kithapuleh",
        "url":  "songs/Malto Kithapuleh.mp3",
        "id":  51,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Aayiram Mugangal",
        "url":  "songs/Aayiram Mugangal.mp3",
        "id":  52,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Unnaal Thaan",
        "url":  "songs/Unnaal Thaan.mp3",
        "id":  53,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ennodu",
        "url":  "songs/Ennodu.mp3",
        "id":  54,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sangathamizhan",
        "url":  "songs/Sangathamizhan.mp3",
        "id":  55,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sandakari Neethan",
        "url":  "songs/Sandakari Neethan.mp3",
        "id":  56,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kamala",
        "url":  "songs/Kamala.mp3",
        "id":  57,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ennai Vittu",
        "url":  "songs/Ennai Vittu_1.mp3",
        "id":  58,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Neenga Mudiyuma",
        "url":  "songs/Neenga Mudiyuma_1.mp3",
        "id":  59,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Un Nenapu",
        "url":  "songs/Un Nenapu.mp3",
        "id":  60,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sandalee",
        "url":  "songs/Sandalee.mp3",
        "id":  61,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pathu Viral",
        "url":  "songs/Pathu Viral.mp3",
        "id":  62,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaa Chellam",
        "url":  "songs/Vaa Chellam.mp3",
        "id":  63,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Iravu",
        "url":  "songs/Iravu.mp3",
        "id":  64,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kaarmugil",
        "url":  "songs/Kaarmugil.mp3",
        "id":  65,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mouna Mazhaiye",
        "url":  "songs/Mouna Mazhaiye.mp3",
        "id":  66,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pattu Vanna",
        "url":  "songs/Pattu Vanna.mp3",
        "id":  67,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Engada Irundheenga",
        "url":  "songs/Engada Irundheenga.mp3",
        "id":  68,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Paisa Note",
        "url":  "songs/Paisa Note.mp3",
        "id":  69,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Hi Sonna Pothum",
        "url":  "songs/Hi Sonna Pothum.mp3",
        "id":  70,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Nanba",
        "url":  "songs/Nanba.mp3",
        "id":  71,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Comali Theme",
        "url":  "songs/Comali Theme.mp3",
        "id":  72,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Yaaro",
        "url":  "songs/Yaaro.mp3",
        "id":  73,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Engu Poi Solven",
        "url":  "songs/Engu Poi Solven.mp3",
        "id":  74,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Anbe Peranbe",
        "url":  "songs/Anbe Peranbe.mp3",
        "id":  75,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thandalkaaran",
        "url":  "songs/Thandalkaaran.mp3",
        "id":  76,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pothi Pothi",
        "url":  "songs/Pothi Pothi.mp3",
        "id":  77,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kanne Kanne",
        "url":  "songs/Kanne Kanne.mp3",
        "id":  78,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Yaaro Yaaro",
        "url":  "songs/Yaaro Yaaro.mp3",
        "id":  79,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "The Ayogya Theme",
        "url":  "songs/The Ayogya Theme.mp3",
        "id":  80,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Nee Sirichalum",
        "url":  "songs/Nee Sirichalum.mp3",
        "id":  81,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sakalakala Vallavan",
        "url":  "songs/Sakalakala Vallavan.mp3",
        "id":  82,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Enna Nadanthalum",
        "url":  "songs/Enna Nadanthalum_1.mp3",
        "id":  83,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Maatikkichey",
        "url":  "songs/Maatikkichey.mp3",
        "id":  84,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Machi Engalukku Ellam",
        "url":  "songs/Machi Engalukku Ellam_1.mp3",
        "id":  85,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaadi Pulla Vaadi",
        "url":  "songs/Vaadi Pulla Vaadi.mp3",
        "id":  86,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Great Ji",
        "url":  "songs/Great Ji.mp3",
        "id":  87,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sodakku",
        "url":  "songs/Sodakku.mp3",
        "id":  88,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Naana Thaanaa",
        "url":  "songs/Naana Thaanaa.mp3",
        "id":  89,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Peela Peela",
        "url":  "songs/Peela Peela.mp3",
        "id":  90,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Karupu Vellai",
        "url":  "songs/Karupu Vellai.mp3",
        "id":  91,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Yaanji",
        "url":  "songs/Yaanji.mp3",
        "id":  92,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pokaatha Neram",
        "url":  "songs/Pokaatha Neram.mp3",
        "id":  93,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ghetto Gospel",
        "url":  "songs/Ghetto Gospel.mp3",
        "id":  94,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Tasakku Tasakku",
        "url":  "songs/Tasakku Tasakku.mp3",
        "id":  95,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oru Katha Sollatta",
        "url":  "songs/Oru Katha Sollatta.mp3",
        "id":  96,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vikram Vedha Theme",
        "url":  "songs/Vikram Vedha Theme.mp3",
        "id":  97,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "The Tales of Vikram Vedha",
        "url":  "songs/The Tales of Vikram Vedha.mp3",
        "id":  98,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Single Pasanga",
        "url":  "songs/Single Pasanga.mp3",
        "id":  99,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Aathadi",
        "url":  "songs/Aathadi.mp3",
        "id":  100,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pallikoodam",
        "url":  "songs/Pallikoodam.mp3",
        "id":  101,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vengamavan",
        "url":  "songs/Vengamavan.mp3",
        "id":  102,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Morattu Single",
        "url":  "songs/Morattu Single.mp3",
        "id":  103,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Natpe Thunai Title Track",
        "url":  "songs/Natpe Thunai Title Track.mp3",
        "id":  104,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Takkunu Takkunu",
        "url":  "songs/Takkunu Takkunu.mp3",
        "id":  105,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kalakkalu Mr Localu",
        "url":  "songs/Kalakkalu Mr Localu.mp3",
        "id":  106,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Menaminiki",
        "url":  "songs/Menaminiki_1.mp3",
        "id":  107,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Nee Sirichalum",
        "url":  "songs/Nee Sirichalum_1.mp3",
        "id":  108,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mr. Local Theme",
        "url":  "songs/Mr. Local Theme.mp3",
        "id":  109,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Verithanam",
        "url":  "songs/Verithanam.mp3",
        "id":  110,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Singappenney",
        "url":  "songs/Singappenney.mp3",
        "id":  111,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Unakaga",
        "url":  "songs/Unakaga.mp3",
        "id":  112,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Maatharey",
        "url":  "songs/Maatharey.mp3",
        "id":  113,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Bigil Bigil Bigiluma",
        "url":  "songs/Bigil Bigil Bigiluma.mp3",
        "id":  114,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Bigil Theme",
        "url":  "songs/Bigil Theme.mp3",
        "id":  115,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oru Viral Puratchi",
        "url":  "songs/Oru Viral Puratchi_1.mp3",
        "id":  116,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Simtaangaran",
        "url":  "songs/Simtaangaran_1.mp3",
        "id":  117,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "OMG Ponnu",
        "url":  "songs/OMG Ponnu_1.mp3",
        "id":  118,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "CEO in the House",
        "url":  "songs/CEO in the House_1.mp3",
        "id":  119,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Maacho",
        "url":  "songs/Maacho.mp3",
        "id":  120,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "A Life Full of Love Theme (Instrumental)",
        "url":  "songs/A Life Full of Love Theme (Instrumental).mp3",
        "id":  121,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "A Love Blossoms (Instrumental)",
        "url":  "songs/A Love Blossoms (Instrumental).mp3",
        "id":  122,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Aaha Kalyanam",
        "url":  "songs/Aaha Kalyanam.mp3",
        "id":  123,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Aalaporan Thamizhan",
        "url":  "songs/Aalaporan Thamizhan_1.mp3",
        "id":  124,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Aalaporan Thamizhan",
        "url":  "songs/Aalaporan Thamizhan.mp3",
        "id":  125,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Aasa Pulla",
        "url":  "songs/Aasa Pulla.mp3",
        "id":  126,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Aathi",
        "url":  "songs/Aathi.mp3",
        "id":  127,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Adaavadi (From \"Love Insurance Kompany\")",
        "url":  "songs/Adaavadi (From Love Insurance Kompany).mp3",
        "id":  128,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Adchithooku",
        "url":  "songs/Adchithooku.mp3",
        "id":  129,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Adhirudha",
        "url":  "songs/Adhirudha.mp3",
        "id":  130,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Adiyae Kolluthey",
        "url":  "songs/Adiyae Kolluthey.mp3",
        "id":  131,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Adiye Sakkarakatti",
        "url":  "songs/Adiye Sakkarakatti.mp3",
        "id":  132,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Agilam Nee",
        "url":  "songs/Agilam Nee.mp3",
        "id":  133,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Alaipayuthey Kanna",
        "url":  "songs/Alaipayuthey Kanna.mp3",
        "id":  134,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Alapparai - Theme",
        "url":  "songs/Alapparai - Theme.mp3",
        "id":  135,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Alapuzha Sandhayila",
        "url":  "songs/Alapuzha Sandhayila.mp3",
        "id":  136,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Amma Amma",
        "url":  "songs/Amma Amma.mp3",
        "id":  137,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Anbe Anbe",
        "url":  "songs/Anbe Anbe.mp3",
        "id":  138,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Andha Kanna Paathaakaa",
        "url":  "songs/Andha Kanna Paathaakaa.mp3",
        "id":  139,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Annul Maelae",
        "url":  "songs/Annul Maelae.mp3",
        "id":  140,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Appadi Podu",
        "url":  "songs/Appadi Podu.mp3",
        "id":  141,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Arasan Theme",
        "url":  "songs/Arasan Theme.mp3",
        "id":  142,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Arjunar Villu",
        "url":  "songs/Arjunar Villu_1.mp3",
        "id":  143,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Arjunar Villu",
        "url":  "songs/Arjunar Villu.mp3",
        "id":  144,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Aura 10/10 (From \"Meesaya Murukku 2\")",
        "url":  "songs/Aura 1010 (From Meesaya Murukku 2).mp3",
        "id":  145,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ayyayo Nenju",
        "url":  "songs/Ayyayo Nenju.mp3",
        "id":  146,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Azhakana Ratsasiye",
        "url":  "songs/Azhakana Ratsasiye.mp3",
        "id":  147,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Bad Eyes Villain Theme",
        "url":  "songs/Bad Eyes Villain Theme.mp3",
        "id":  148,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Beat of Master (Instrumental)",
        "url":  "songs/Beat of Master (Instrumental).mp3",
        "id":  149,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Celebration Of Varisu",
        "url":  "songs/Celebration Of Varisu.mp3",
        "id":  150,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "CEO in the House",
        "url":  "songs/CEO in the House.mp3",
        "id":  151,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Chikitu Vibe",
        "url":  "songs/Chikitu Vibe.mp3",
        "id":  152,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Chikitu",
        "url":  "songs/Chikitu.mp3",
        "id":  153,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Columbus Columbu",
        "url":  "songs/Columbus Columbu.mp3",
        "id":  154,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Come Closer (Sirikkadhey Reprise)",
        "url":  "songs/Come Closer (Sirikkadhey Reprise).mp3",
        "id":  155,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Come on Girls (The Celebration of Love)",
        "url":  "songs/Come on Girls (The Celebration of Love).mp3",
        "id":  156,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Coolie Disco",
        "url":  "songs/Coolie Disco.mp3",
        "id":  157,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Daavuya",
        "url":  "songs/Daavuya.mp3",
        "id":  158,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Danga Danga",
        "url":  "songs/Danga Danga.mp3",
        "id":  159,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Dheema",
        "url":  "songs/Dheema.mp3",
        "id":  160,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Dheera Dheera",
        "url":  "songs/Dheera Dheera.mp3",
        "id":  161,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Dope Track",
        "url":  "songs/Dope Track.mp3",
        "id":  162,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "En Vennilave",
        "url":  "songs/En Vennilave.mp3",
        "id":  163,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Endrendrum Punnagai",
        "url":  "songs/Endrendrum Punnagai.mp3",
        "id":  164,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Engeyo Partha",
        "url":  "songs/Engeyo Partha.mp3",
        "id":  165,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Enna Nadanthalum",
        "url":  "songs/Enna Nadanthalum.mp3",
        "id":  166,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ennake Ennaka",
        "url":  "songs/Ennake Ennaka.mp3",
        "id":  167,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Erani Kuradhani",
        "url":  "songs/Erani Kuradhani.mp3",
        "id":  168,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Evano Oruvan Vasikiran",
        "url":  "songs/Evano Oruvan Vasikiran.mp3",
        "id":  169,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ey Inga Paaru",
        "url":  "songs/Ey Inga Paaru.mp3",
        "id":  170,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Hello",
        "url":  "songs/Hello.mp3",
        "id":  171,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Hey Raja (Oh Supernova)",
        "url":  "songs/Hey Raja (Oh Supernova).mp3",
        "id":  172,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "High On Love",
        "url":  "songs/High On Love.mp3",
        "id":  173,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Hold Me Now",
        "url":  "songs/Hold Me Now.mp3",
        "id":  174,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Honey Honey",
        "url":  "songs/Honey Honey.mp3",
        "id":  175,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "I Am The Danger",
        "url":  "songs/I Am The Danger.mp3",
        "id":  176,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "I Will Never Let You Go",
        "url":  "songs/I Will Never Let You Go.mp3",
        "id":  177,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Idhazhin Oram (The Innocence of Love)",
        "url":  "songs/Idhazhin Oram (The Innocence of Love).mp3",
        "id":  178,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ilamai Thirumbudhe",
        "url":  "songs/Ilamai Thirumbudhe.mp3",
        "id":  179,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Indiraiyo Ival Sundariyo",
        "url":  "songs/Indiraiyo Ival Sundariyo.mp3",
        "id":  180,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Innisai Paadi - Sad",
        "url":  "songs/Innisai Paadi - Sad.mp3",
        "id":  181,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Innisai Paadi Varum (M)",
        "url":  "songs/Innisai Paadi Varum (M).mp3",
        "id":  182,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Innisai Paadi Varum",
        "url":  "songs/Innisai Paadi Varum.mp3",
        "id":  183,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Irupathu Kodi Nillavukal",
        "url":  "songs/Irupathu Kodi Nillavukal.mp3",
        "id":  184,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Its Over",
        "url":  "songs/Its Over.mp3",
        "id":  185,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Jilpanso",
        "url":  "songs/Jilpanso.mp3",
        "id":  186,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Jimikki Ponnu",
        "url":  "songs/Jimikki Ponnu.mp3",
        "id":  187,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Jithu Theme",
        "url":  "songs/Jithu Theme.mp3",
        "id":  188,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kaali Theme",
        "url":  "songs/Kaali Theme.mp3",
        "id":  189,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kaatru Kuthirayile",
        "url":  "songs/Kaatru Kuthirayile.mp3",
        "id":  190,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kabadi Kabadi",
        "url":  "songs/Kabadi Kabadi.mp3",
        "id":  191,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kadhal Oru Aagayam",
        "url":  "songs/Kadhal Oru Aagayam.mp3",
        "id":  192,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kadhal Sadugudu",
        "url":  "songs/Kadhal Sadugudu.mp3",
        "id":  193,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kadhalikathey",
        "url":  "songs/Kadhalikathey.mp3",
        "id":  194,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kadhalikum Pennin",
        "url":  "songs/Kadhalikum Pennin.mp3",
        "id":  195,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kakkai Sirakinile",
        "url":  "songs/Kakkai Sirakinile.mp3",
        "id":  196,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kannaana Kanney",
        "url":  "songs/Kannaana Kanney.mp3",
        "id":  197,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kannaana Kanney",
        "url":  "songs/Kannaana Kanney_1.mp3",
        "id":  198,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kannaana Kanney",
        "url":  "songs/Kannaana Kanney_2.mp3",
        "id":  199,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kannana Kanne",
        "url":  "songs/Kannana Kanne.mp3",
        "id":  200,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kannazhaga (The Kiss of Love)",
        "url":  "songs/Kannazhaga (The Kiss of Love).mp3",
        "id":  201,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kanneer Sindha",
        "url":  "songs/Kanneer Sindha.mp3",
        "id":  202,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kannodu Kaanberallam",
        "url":  "songs/Kannodu Kaanberallam.mp3",
        "id":  203,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kaththi Theme The Sword of Destiny",
        "url":  "songs/Kaththi Theme The Sword of Destiny.mp3",
        "id":  204,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kokkarakko",
        "url":  "songs/Kokkarakko.mp3",
        "id":  205,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kokki",
        "url":  "songs/Kokki.mp3",
        "id":  206,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kollayile Thennai",
        "url":  "songs/Kollayile Thennai.mp3",
        "id":  207,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kurukku Siruthavale",
        "url":  "songs/Kurukku Siruthavale.mp3",
        "id":  208,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Kutti Story",
        "url":  "songs/Kutti Story.mp3",
        "id":  209,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Lets be Friends",
        "url":  "songs/Lets be Friends.mp3",
        "id":  210,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Lion vs Hyenas",
        "url":  "songs/Lion vs Hyenas.mp3",
        "id":  211,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Loveah Sollitalea",
        "url":  "songs/Loveah Sollitalea.mp3",
        "id":  212,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Maacho Ennacho",
        "url":  "songs/Maacho Ennacho.mp3",
        "id":  213,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Maattikkichey Maattikkichey",
        "url":  "songs/Maattikkichey Maattikkichey.mp3",
        "id":  214,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Machi Engalukku Ellam",
        "url":  "songs/Machi Engalukku Ellam.mp3",
        "id":  215,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Madura Petta",
        "url":  "songs/Madura Petta.mp3",
        "id":  216,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Marana Mass",
        "url":  "songs/Marana Mass.mp3",
        "id":  217,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Master the Blaster",
        "url":  "songs/Master the Blaster.mp3",
        "id":  218,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mayakkama Kalakkama",
        "url":  "songs/Mayakkama Kalakkama.mp3",
        "id":  219,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Meesa Beauty",
        "url":  "songs/Meesa Beauty.mp3",
        "id":  220,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Meesaya Murukku",
        "url":  "songs/Meesaya Murukku.mp3",
        "id":  221,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Megamai Vanthu",
        "url":  "songs/Megamai Vanthu.mp3",
        "id":  222,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Megham Karukatha",
        "url":  "songs/Megham Karukatha.mp3",
        "id":  223,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mehabooba",
        "url":  "songs/Mehabooba.mp3",
        "id":  224,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mersal Arasan",
        "url":  "songs/Mersal Arasan_1.mp3",
        "id":  225,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mersal Arasan",
        "url":  "songs/Mersal Arasan.mp3",
        "id":  226,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Miss you Papa",
        "url":  "songs/Miss you Papa.mp3",
        "id":  227,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mobsta",
        "url":  "songs/Mobsta.mp3",
        "id":  228,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Monica",
        "url":  "songs/Monica.mp3",
        "id":  229,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mudhalvane",
        "url":  "songs/Mudhalvane.mp3",
        "id":  230,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mukkala Mukkabala",
        "url":  "songs/Mukkala Mukkabala.mp3",
        "id":  231,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mundhinam Parthene",
        "url":  "songs/Mundhinam Parthene.mp3",
        "id":  232,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Mutta Kalakki",
        "url":  "songs/Mutta Kalakki.mp3",
        "id":  233,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Naanum Rowdy Dhaan",
        "url":  "songs/Naanum Rowdy Dhaan.mp3",
        "id":  234,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Nee Paartha Vizhigal (The Touch of Love)",
        "url":  "songs/Nee Paartha Vizhigal (The Touch of Love).mp3",
        "id":  235,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Nee Yaaro",
        "url":  "songs/Nee Yaaro.mp3",
        "id":  236,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Neethanae Neethane",
        "url":  "songs/Neethanae Neethane_1.mp3",
        "id":  237,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Neethanae Neethane",
        "url":  "songs/Neethanae Neethane.mp3",
        "id":  238,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Neeyum Naanum Anbe",
        "url":  "songs/Neeyum Naanum Anbe.mp3",
        "id":  239,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Neeyum Naanum",
        "url":  "songs/Neeyum Naanum.mp3",
        "id":  240,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Nenje Nenje",
        "url":  "songs/Nenje Nenje.mp3",
        "id":  241,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Nenjukkul Peidhidum",
        "url":  "songs/Nenjukkul Peidhidum.mp3",
        "id":  242,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Never Let Me Go",
        "url":  "songs/Never Let Me Go.mp3",
        "id":  243,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oh Baby Oh Baby",
        "url":  "songs/Oh Baby Oh Baby.mp3",
        "id":  244,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oh Shanthi Shanthi",
        "url":  "songs/Oh Shanthi Shanthi.mp3",
        "id":  245,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "OMG Ponnu",
        "url":  "songs/OMG Ponnu.mp3",
        "id":  246,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oorum Blood",
        "url":  "songs/Oorum Blood.mp3",
        "id":  247,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oru Kutti Katha",
        "url":  "songs/Oru Kutti Katha.mp3",
        "id":  248,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oru Naalaikkul",
        "url":  "songs/Oru Naalaikkul.mp3",
        "id":  249,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oru Pere Varalaaru",
        "url":  "songs/Oru Pere Varalaaru.mp3",
        "id":  250,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oru Viral Puratchi",
        "url":  "songs/Oru Viral Puratchi.mp3",
        "id":  251,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Otha Sollaala",
        "url":  "songs/Otha Sollaala.mp3",
        "id":  252,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Oyaayiye Yaayiye",
        "url":  "songs/Oyaayiye Yaayiye.mp3",
        "id":  253,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Paalam",
        "url":  "songs/Paalam.mp3",
        "id":  254,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pakkam Vanthu",
        "url":  "songs/Pakkam Vanthu.mp3",
        "id":  255,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pala Palakura",
        "url":  "songs/Pala Palakura.mp3",
        "id":  256,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Palakkattu Pakkathile",
        "url":  "songs/Palakkattu Pakkathile.mp3",
        "id":  257,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Palapalakkudhu",
        "url":  "songs/Palapalakkudhu.mp3",
        "id":  258,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Paranthene Penne",
        "url":  "songs/Paranthene Penne.mp3",
        "id":  259,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pattuma",
        "url":  "songs/Pattuma.mp3",
        "id":  260,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pavazha Malli (From Think Indie) Masstamilan",
        "url":  "songs/Pavazha Malli (From Think Indie) Masstamilan.mp3",
        "id":  261,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Penne Ennai Kodu",
        "url":  "songs/Penne Ennai Kodu.mp3",
        "id":  262,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Petta Paraak",
        "url":  "songs/Petta Paraak.mp3",
        "id":  263,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Petta Theme",
        "url":  "songs/Petta Theme.mp3",
        "id":  264,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Pettai Rap",
        "url":  "songs/Pettai Rap.mp3",
        "id":  265,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Po Indru Neeyaga",
        "url":  "songs/Po Indru Neeyaga.mp3",
        "id":  266,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Po Nee Po (Remix - The Scream of Love)",
        "url":  "songs/Po Nee Po (Remix - The Scream of Love).mp3",
        "id":  267,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Po Nee Po (The Pain of Love)",
        "url":  "songs/Po Nee Po (The Pain of Love).mp3",
        "id":  268,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Poga Poga",
        "url":  "songs/Poga Poga.mp3",
        "id":  269,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Polakatum Para Para",
        "url":  "songs/Polakatum Para Para.mp3",
        "id":  270,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ponmaaney",
        "url":  "songs/Ponmaaney.mp3",
        "id":  271,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Porkkalam (Tamil-Rap)",
        "url":  "songs/Porkkalam (Tamil-Rap).mp3",
        "id":  272,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Powerhouse",
        "url":  "songs/Powerhouse.mp3",
        "id":  273,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Quit Pannuda",
        "url":  "songs/Quit Pannuda.mp3",
        "id":  274,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Raavana Mavandaa",
        "url":  "songs/Raavana Mavandaa.mp3",
        "id":  275,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ranjithame",
        "url":  "songs/Ranjithame.mp3",
        "id":  276,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Remo Nee Kadhalan",
        "url":  "songs/Remo Nee Kadhalan.mp3",
        "id":  277,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Rise Up - Theme",
        "url":  "songs/Rise Up - Theme.mp3",
        "id":  278,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Rudras Symphony",
        "url":  "songs/Rudras Symphony.mp3",
        "id":  279,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Saitji Saitji",
        "url":  "songs/Saitji Saitji.mp3",
        "id":  280,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Salaam Rocky Bhai",
        "url":  "songs/Salaam Rocky Bhai.mp3",
        "id":  281,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Secret Window",
        "url":  "songs/Secret Window.mp3",
        "id":  282,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Selfie Pulla",
        "url":  "songs/Selfie Pulla.mp3",
        "id":  283,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Senjitaley",
        "url":  "songs/Senjitaley.mp3",
        "id":  284,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "September Madham",
        "url":  "songs/September Madham.mp3",
        "id":  285,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sha La La",
        "url":  "songs/Sha La La.mp3",
        "id":  286,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Shakkalakka Baby",
        "url":  "songs/Shakkalakka Baby.mp3",
        "id":  287,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Simtaangaran",
        "url":  "songs/Simtaangaran.mp3",
        "id":  288,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Singaar Singh",
        "url":  "songs/Singaar Singh.mp3",
        "id":  289,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Singari",
        "url":  "songs/Singari.mp3",
        "id":  290,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sirikkadhey",
        "url":  "songs/Sirikkadhey.mp3",
        "id":  291,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Smiling With The Pain (Theme)",
        "url":  "songs/Smiling With The Pain (Theme).mp3",
        "id":  292,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Snehidhane",
        "url":  "songs/Snehidhane.mp3",
        "id":  293,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Soora Thenga Addra",
        "url":  "songs/Soora Thenga Addra.mp3",
        "id":  294,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Soul Of Varisu",
        "url":  "songs/Soul Of Varisu.mp3",
        "id":  295,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Sulthana",
        "url":  "songs/Sulthana.mp3",
        "id":  296,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Surprise Me",
        "url":  "songs/Surprise Me.mp3",
        "id":  297,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Tamilselvi",
        "url":  "songs/Tamilselvi.mp3",
        "id":  298,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thaai Kelavi",
        "url":  "songs/Thaai Kelavi.mp3",
        "id":  299,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thalapathy Kacheri",
        "url":  "songs/Thalapathy Kacheri.mp3",
        "id":  300,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thalle Thillaley",
        "url":  "songs/Thalle Thillaley.mp3",
        "id":  301,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thanga Magan",
        "url":  "songs/Thanga Magan.mp3",
        "id":  302,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thangame",
        "url":  "songs/Thangame.mp3",
        "id":  303,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thappad Maara",
        "url":  "songs/Thappad Maara.mp3",
        "id":  304,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "The Monster Song",
        "url":  "songs/The Monster Song.mp3",
        "id":  305,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "The Person Is The Loser",
        "url":  "songs/The Person Is The Loser.mp3",
        "id":  306,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "The Rhythm of Love Theme (Theme)",
        "url":  "songs/The Rhythm of Love Theme (Theme).mp3",
        "id":  307,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thee Thalapathy",
        "url":  "songs/Thee Thalapathy.mp3",
        "id":  308,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Theme of 3",
        "url":  "songs/Theme of 3.mp3",
        "id":  309,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thenmozhi",
        "url":  "songs/Thenmozhi.mp3",
        "id":  310,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thodu Thodu Enave",
        "url":  "songs/Thodu Thodu Enave.mp3",
        "id":  311,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Thookkudurai - Theme",
        "url":  "songs/Thookkudurai - Theme.mp3",
        "id":  312,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Toofan",
        "url":  "songs/Toofan.mp3",
        "id":  313,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Top Tucker",
        "url":  "songs/Top Tucker.mp3",
        "id":  314,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Udhungada Sangu",
        "url":  "songs/Udhungada Sangu.mp3",
        "id":  315,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ullaallaa",
        "url":  "songs/Ullaallaa.mp3",
        "id":  316,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Ulundhu Vithaikayile",
        "url":  "songs/Ulundhu Vithaikayile.mp3",
        "id":  317,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Unga Vijay, Na Varen",
        "url":  "songs/Unga Vijay, Na Varen.mp3",
        "id":  318,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Uppukarauvadu",
        "url":  "songs/Uppukarauvadu.mp3",
        "id":  319,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Urvashi Urvashi",
        "url":  "songs/Urvashi Urvashi.mp3",
        "id":  320,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaa Thalaivaa",
        "url":  "songs/Vaa Thalaivaa.mp3",
        "id":  321,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaadi Nee Vaadi",
        "url":  "songs/Vaadi Nee Vaadi.mp3",
        "id":  322,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaaney Vaaney",
        "url":  "songs/Vaaney Vaaney.mp3",
        "id":  323,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaaney Vaaney",
        "url":  "songs/Vaaney Vaaney_1.mp3",
        "id":  324,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaathi Coming",
        "url":  "songs/Vaathi Coming.mp3",
        "id":  325,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaathi Kabaddi",
        "url":  "songs/Vaathi Kabaddi.mp3",
        "id":  326,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vaathi Raid",
        "url":  "songs/Vaathi Raid.mp3",
        "id":  327,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Varava Varava",
        "url":  "songs/Varava Varava.mp3",
        "id":  328,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Varaya Thozhi",
        "url":  "songs/Varaya Thozhi.mp3",
        "id":  329,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Velaiyilla Pattathari (Title Song)",
        "url":  "songs/Velaiyilla Pattathari (Title Song).mp3",
        "id":  330,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Venmegam Pennaga",
        "url":  "songs/Venmegam Pennaga.mp3",
        "id":  331,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vettikattu",
        "url":  "songs/Vettikattu.mp3",
        "id":  332,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vettikattu",
        "url":  "songs/Vettikattu_1.mp3",
        "id":  333,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vilambara Idaiveli",
        "url":  "songs/Vilambara Idaiveli.mp3",
        "id":  334,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Vizhi Moodi Yosithaal",
        "url":  "songs/Vizhi Moodi Yosithaal.mp3",
        "id":  335,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Warriors (English Rap)",
        "url":  "songs/Warriors (English Rap).mp3",
        "id":  336,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "What A Karavad",
        "url":  "songs/What A Karavad.mp3",
        "id":  337,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Why This Kolaveri Di? (The Soup of Love)",
        "url":  "songs/Why This Kolaveri Di (The Soup of Love).mp3",
        "id":  338,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "World of Mark Antony",
        "url":  "songs/World of Mark Antony.mp3",
        "id":  339,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Yaro Yarodi",
        "url":  "songs/Yaro Yarodi.mp3",
        "id":  340,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Yathe Yathe",
        "url":  "songs/Yathe Yathe.mp3",
        "id":  341,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Yennai Maatrum Kadhale",
        "url":  "songs/Yennai Maatrum Kadhale.mp3",
        "id":  342,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Unknown Artist",
        "title":  "Yethi Yethi",
        "url":  "songs/Yethi Yethi.mp3",
        "id":  343,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Vijay",
        "title":  "Thalapathy Kacheri",
        "url":  "songs/Thalapathy Kacheri.mp3",
        "id":  344,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Anirudh Ravichander",
        "title":  "Thee Thalapathy",
        "url":  "songs/Thee Thalapathy.mp3",
        "id":  345,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        "artist":  "Vijay",
        "title":  "Unga Vijay, Na Varen",
        "url":  "songs/Unga Vijay, Na Varen.mp3",
        "id":  346,
        "cover":  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    }
];

let currentSongIndex = -1;
let isPlaying = false;

// State Management
let likedSongs = [];
try {
    likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
} catch (e) {
    console.error("Error loading liked songs", e);
}

let playlists = [];
try {
    playlists = JSON.parse(localStorage.getItem('playlists')) || [];
} catch (e) {
    console.error("Error loading playlists", e);
}

const audio = document.getElementById('audio-player');
if (audio) {
    audio.onerror = function() {
        const error = audio.error;
        let msg = "Unknown audio error";
        if (error) {
            switch (error.code) {
                case 1: msg = "Aborted"; break;
                case 2: msg = "Network error"; break;
                case 3: msg = "Decoding error"; break;
                case 4: msg = "Source not supported (check file path)"; break;
            }
        }
        console.error("Audio Error:", msg, audio.src);
    };
}
const songGrid = document.getElementById('song-grid');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const rewindBtn = document.getElementById('rewind-btn');
const forwardBtn = document.getElementById('forward-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const volumeBar = document.getElementById('volume-bar');

const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerCover = document.getElementById('player-cover');
const likeBtn = document.querySelector('.like-btn');

// Floating Player Elements
const floatingPlayer = document.getElementById('floating-player');
const fpTitle = document.getElementById('fp-title');
const fpArtist = document.getElementById('fp-artist');
const fpCover = document.getElementById('fp-cover');
const fpPlayPauseBtn = document.getElementById('fp-play-pause-btn');
const fpPrevBtn = document.getElementById('fp-prev-btn');
const fpNextBtn = document.getElementById('fp-next-btn');
const fpRewindBtn = document.getElementById('fp-rewind-btn');
const fpForwardBtn = document.getElementById('fp-forward-btn');
const fpCloseBtn = document.getElementById('fp-close-btn');

// Navigation Elements
const homeNav = document.getElementById('home-nav');
const searchNav = document.getElementById('search-nav');
const libraryNav = document.getElementById('library-nav');
const createPlaylistBtn = document.getElementById('create-playlist-btn');
const likedSongsBtn = document.getElementById('liked-songs-btn');
const profileBtn = document.getElementById('profile-btn');

// Containers
const searchBarContainer = document.getElementById('search-bar-container');
const searchInput = document.getElementById('search-input');
const heroSection = document.getElementById('hero-section');
const sectionTitle = document.getElementById('section-title');

// Modal Elements
const modalOverlay = document.getElementById('modal-overlay');
const playlistModal = document.getElementById('playlist-modal');
const accountModal = document.getElementById('account-modal');
const closeButtons = document.querySelectorAll('.close-modal');
const playlistNameInput = document.getElementById('playlist-name-input');
const savePlaylistBtn = document.getElementById('save-playlist-btn');

// Initialize songs
function renderSongs(songsToRender, title = "Spotify Playlists") {
    if (sectionTitle) sectionTitle.textContent = title;
    if (songGrid) {
        songGrid.innerHTML = '';
        songGrid.className = 'song-grid';
        
        if (songsToRender.length === 0) {
            songGrid.innerHTML = '<p style="color: #b3b3b3; padding: 20px;">No songs found.</p>';
            return;
        }

        songsToRender.forEach((song) => {
            const card = document.createElement('div');
            card.className = 'song-card';
            card.innerHTML = `
                <img src="${song.cover}" alt="${song.title}">
                <div class="play-hover-btn">
                    <i data-lucide="play" fill="black"></i>
                </div>
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            `;
            card.addEventListener('click', () => {
                const globalIndex = songs.findIndex(s => s.id === song.id);
                playSong(globalIndex);
            });
            songGrid.appendChild(card);
        });
        if (window.lucide) lucide.createIcons();
    }
}

function renderLibrary() {
    if (!sectionTitle || !heroSection || !songGrid) return;
    
    sectionTitle.textContent = "Your Library";
    heroSection.className = "hero-section hero-library";
    const h1 = heroSection.querySelector('h1');
    const p = heroSection.querySelector('p');
    if (h1) h1.textContent = "Your Library";
    if (p) p.textContent = "Your playlists and liked songs in one place.";

    songGrid.innerHTML = '';
    songGrid.className = 'library-grid';

    // Liked Songs Tile
    const likedTile = document.createElement('div');
    likedTile.className = 'library-item';
    likedTile.innerHTML = `
        <h3>Liked Songs</h3>
        <p>${likedSongs.length} songs</p>
    `;
    likedTile.addEventListener('click', showLikedSongs);
    songGrid.appendChild(likedTile);

    // Playlists
    playlists.forEach(playlist => {
        const playlistTile = document.createElement('div');
        playlistTile.className = 'library-item playlist-item';
        playlistTile.innerHTML = `
            <h3>${playlist.name}</h3>
            <p>${playlist.songIds.length} songs</p>
        `;
        playlistTile.addEventListener('click', () => showPlaylist(playlist));
        songGrid.appendChild(playlistTile);
    });
}

function showLikedSongs() {
    const songsToRender = songs.filter(s => likedSongs.includes(s.id));
    if (heroSection) {
        heroSection.className = "hero-section hero-liked";
        const h1 = heroSection.querySelector('h1');
        const p = heroSection.querySelector('p');
        if (h1) h1.textContent = "Liked Songs";
        if (p) p.textContent = "Everything you've ever liked, all in one place.";
    }
    renderSongs(songsToRender, "Liked Songs");
    setActiveNav(likedSongsBtn);
}

function showPlaylist(playlist) {
    const songsToRender = songs.filter(s => playlist.songIds.includes(s.id));
    if (heroSection) {
        heroSection.className = "hero-section hero-library";
        const h1 = heroSection.querySelector('h1');
        const p = heroSection.querySelector('p');
        if (h1) h1.textContent = playlist.name;
        if (p) p.textContent = "Your custom playlist.";
    }
    renderSongs(songsToRender, playlist.name);
}

function setActiveNav(element) {
    document.querySelectorAll('.side-nav li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.action-btn').forEach(btn => btn.style.color = '#b3b3b3');
    
    if (element) {
        element.classList.add('active');
        if (element.classList.contains('action-btn')) {
            element.style.color = '#ffffff';
        }
    }
}

// Player Functions
function playSong(index) {
    if (index === -1) return;
    
    if (index === currentSongIndex) {
        togglePlay();
        return;
    }
    
    currentSongIndex = index;
    const song = songs[index];
    
    if (audio && song) {
        isPlaying = false; // Reset state before loading
        updatePlayPauseIcon();

        // Encode the URL manually for GitHub Pages compatibility
        // Only encode if it's a local path with spaces
        let url = song.url;
        if (!url.startsWith('http')) {
            // Encode spaces and special characters, but keep the folder structure
            url = url.split('/').map(part => encodeURIComponent(part)).join('/');
        }
        
        audio.src = url;
        audio.load();
        
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                updatePlayerUI();
            }).catch(error => {
                console.error("Playback failed:", error);
                isPlaying = false;
                updatePlayPauseIcon();
            });
        }
    }
}

function togglePlay() {
    if (currentSongIndex === -1) {
        playSong(0);
        return;
    }

    if (audio) {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            updatePlayPauseIcon();
        } else {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    updatePlayPauseIcon();
                }).catch(error => {
                    console.error("Toggle playback failed:", error);
                    isPlaying = false;
                    updatePlayPauseIcon();
                });
            }
        }
    }
}

function updatePlayPauseIcon() {
    const icon = isPlaying ? 
        '<i data-lucide="pause" fill="black"></i>' : 
        '<i data-lucide="play" fill="black"></i>';
    
    if (playPauseBtn) playPauseBtn.innerHTML = icon;
    if (fpPlayPauseBtn) fpPlayPauseBtn.innerHTML = icon;
    
    // Ensure floating player is visible if playing
    if (isPlaying && floatingPlayer) {
        floatingPlayer.classList.remove('hidden');
    }
    
    if (window.lucide) lucide.createIcons();
}

function updatePlayerUI() {
    const song = songs[currentSongIndex];
    if (!song) return;
    
    if (playerTitle) playerTitle.textContent = song.title;
    if (playerArtist) playerArtist.textContent = song.artist;
    if (playerCover) playerCover.src = song.cover;
    
    // Update Floating Player
    if (floatingPlayer) {
        floatingPlayer.classList.remove('hidden');
        if (fpTitle) fpTitle.textContent = song.title;
        if (fpArtist) fpArtist.textContent = song.artist;
        if (fpCover) fpCover.src = song.cover;
    }

    // Update like button
    if (likeBtn) {
        if (likedSongs.includes(song.id)) {
            likeBtn.classList.add('liked');
        } else {
            likeBtn.classList.remove('liked');
        }
    }
    
    updatePlayPauseIcon();
}

// Navigation Events
if (homeNav) {
    homeNav.addEventListener('click', () => {
        renderHome();
        setActiveNav(homeNav);
        if (searchBarContainer) searchBarContainer.classList.add('hidden');
    });
}

if (searchNav) {
    searchNav.addEventListener('click', () => {
        if (searchBarContainer) {
            searchBarContainer.classList.remove('hidden');
            if (searchInput) searchInput.focus();
        }
        setActiveNav(searchNav);
    });
}

if (libraryNav) {
    libraryNav.addEventListener('click', () => {
        renderLibrary();
        setActiveNav(libraryNav);
        if (searchBarContainer) searchBarContainer.classList.add('hidden');
    });
}

if (likedSongsBtn) likedSongsBtn.addEventListener('click', showLikedSongs);

if (createPlaylistBtn) {
    createPlaylistBtn.addEventListener('click', () => {
        openModal(playlistModal);
    });
}

if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        openModal(accountModal);
    });
}

// Like Functionality
if (likeBtn) {
    likeBtn.addEventListener('click', () => {
        if (currentSongIndex === -1) return;
        
        const songId = songs[currentSongIndex].id;
        const index = likedSongs.indexOf(songId);
        
        if (index === -1) {
            likedSongs.push(songId);
            likeBtn.classList.add('liked');
        } else {
            likedSongs.splice(index, 1);
            likeBtn.classList.remove('liked');
        }
        
        localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
        
        // If currently on Liked Songs view, re-render
        if (sectionTitle && sectionTitle.textContent === "Liked Songs") {
            showLikedSongs();
        }
    });
}

// Modal Functions
function openModal(modal) {
    if (modalOverlay && modal) {
        modalOverlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    if (modalOverlay) modalOverlay.classList.add('hidden');
    if (playlistModal) playlistModal.classList.add('hidden');
    if (accountModal) accountModal.classList.add('hidden');
}

closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
}

if (savePlaylistBtn) {
    savePlaylistBtn.addEventListener('click', () => {
        const name = playlistNameInput.value.trim() || `My Playlist #${playlists.length + 1}`;
        const newPlaylist = {
            id: Date.now(),
            name: name,
            songIds: []
        };
        
        playlists.push(newPlaylist);
        localStorage.setItem('playlists', JSON.stringify(playlists));
        
        if (playlistNameInput) playlistNameInput.value = '';
        closeModal();
        renderLibrary();
    });
}

// Search functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredSongs = songs.filter(song => 
            song.title.toLowerCase().includes(query) || 
            song.artist.toLowerCase().includes(query)
        );
        renderSongs(filteredSongs, "Search Results");
    });
}

// Controls
if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlay);

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        let nextIndex = currentSongIndex + 1;
        if (nextIndex >= songs.length) nextIndex = 0;
        playSong(nextIndex);
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (audio && audio.currentTime > 3) {
            audio.currentTime = 0;
        } else {
            let prevIndex = currentSongIndex - 1;
            if (prevIndex < 0) prevIndex = songs.length - 1;
            playSong(prevIndex);
        }
    });
}

if (rewindBtn) {
    rewindBtn.addEventListener('click', () => {
        if (audio) audio.currentTime = Math.max(0, audio.currentTime - 10);
    });
}

if (forwardBtn) {
    forwardBtn.addEventListener('click', () => {
        if (audio) audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
    });
}

// Floating Player Controls
if (fpPlayPauseBtn) fpPlayPauseBtn.addEventListener('click', togglePlay);

if (fpNextBtn) {
    fpNextBtn.addEventListener('click', () => {
        let nextIndex = currentSongIndex + 1;
        if (nextIndex >= songs.length) nextIndex = 0;
        playSong(nextIndex);
    });
}

if (fpPrevBtn) {
    fpPrevBtn.addEventListener('click', () => {
        if (audio && audio.currentTime > 3) {
            audio.currentTime = 0;
        } else {
            let prevIndex = currentSongIndex - 1;
            if (prevIndex < 0) prevIndex = songs.length - 1;
            playSong(prevIndex);
        }
    });
}

if (fpRewindBtn) {
    fpRewindBtn.addEventListener('click', () => {
        if (audio) audio.currentTime = Math.max(0, audio.currentTime - 10);
    });
}

if (fpForwardBtn) {
    fpForwardBtn.addEventListener('click', () => {
        if (audio) audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
    });
}

if (fpCloseBtn) {
    fpCloseBtn.addEventListener('click', () => {
        if (floatingPlayer) floatingPlayer.classList.add('hidden');
    });
}

// Progress Bar
if (audio) {
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        if (progressBar) progressBar.value = progress || 0;
        
        if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
        if (audio.duration && totalDurationEl) {
            totalDurationEl.textContent = formatTime(audio.duration);
        }
    });

    audio.addEventListener('ended', () => {
        let nextIndex = currentSongIndex + 1;
        if (nextIndex >= songs.length) nextIndex = 0;
        playSong(nextIndex);
    });
}

if (progressBar) {
    progressBar.addEventListener('input', () => {
        const time = (progressBar.value / 100) * audio.duration;
        if (audio) audio.currentTime = time;
    });
}

if (volumeBar) {
    volumeBar.addEventListener('input', () => {
        if (audio) audio.volume = volumeBar.value / 100;
    });
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    // Only handle keyboard if not in search input or other text fields
    if (e.target.tagName === 'INPUT') return;

    switch(e.key) {
        case ' ':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            if (audio) audio.currentTime = Math.max(0, audio.currentTime - 10);
            break;
        case 'ArrowRight':
            if (audio) audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
            break;
        case 'j':
        case 'J':
            if (audio) audio.currentTime = Math.max(0, audio.currentTime - 10);
            break;
        case 'l':
        case 'L':
            if (audio) audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
            break;
        case 'k':
        case 'K':
            togglePlay();
            break;
    }
});

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const splashGreeting = document.getElementById('splash-greeting');
    
    // Set Time-based Greeting for Splash
    const hour = new Date().getHours();
    let greeting = "Good Evening";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";
    
    if (splashGreeting) splashGreeting.textContent = `${greeting}, VibeTune`;

    renderHome();
    updatePlayPauseIcon();

    // Hide Splash Screen after 2.5 seconds
    setTimeout(() => {
        if (splashScreen) {
            splashScreen.classList.add('fade-out');
        }
    }, 2500);
});

function renderHome() {
    if (!songGrid || !heroSection) return;

    // Reset Hero
    heroSection.className = "hero-section";
    const h1 = heroSection.querySelector('h1');
    const p = heroSection.querySelector('p');
    if (h1) h1.textContent = "Peaceful Piano";
    if (p) p.textContent = "Relax and indulge with beautiful piano pieces";

    songGrid.innerHTML = '';
    songGrid.className = 'home-content';

    // Greeting Section
    const hour = new Date().getHours();
    let greeting = "Good Evening";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";

    const greetingDiv = document.createElement('div');
    greetingDiv.className = 'greeting-section';
    greetingDiv.innerHTML = `<h2>${greeting}, VibeTune User</h2>`;
    
    const quickGrid = document.createElement('div');
    quickGrid.className = 'quick-access-grid';
    
    // Take first 6 songs for quick access
    const quickSongs = songs.slice(0, 6);
    quickSongs.forEach(song => {
        const tile = document.createElement('div');
        tile.className = 'quick-tile';
        tile.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <span>${song.title}</span>
            <div class="quick-play-btn">
                <i data-lucide="play" fill="black"></i>
            </div>
        `;
        tile.addEventListener('click', (e) => {
            e.stopPropagation();
            const globalIndex = songs.findIndex(s => s.id === song.id);
            playSong(globalIndex);
        });
        quickGrid.appendChild(tile);
    });
    
    greetingDiv.appendChild(quickGrid);
    songGrid.appendChild(greetingDiv);

    // Create Categories
    renderCategory("Suggested for you", songs.slice(6, 12));
    renderCategory("Recently Played", songs.slice(12, 18));
    renderCategory("Trending Now", songs.slice(18, 24));
    
    if (window.lucide) lucide.createIcons();
}

function renderCategory(title, categorySongs) {
    const section = document.createElement('section');
    section.className = 'songs-section';
    section.innerHTML = `
        <div class="section-header">
            <h2>${title}</h2>
            <span class="show-all">Show all</span>
        </div>
        <div class="song-grid"></div>
    `;
    
    const grid = section.querySelector('.song-grid');
    categorySongs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="play-hover-btn">
                <i data-lucide="play" fill="black"></i>
            </div>
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        `;
        card.addEventListener('click', () => {
            const globalIndex = songs.findIndex(s => s.id === song.id);
            playSong(globalIndex);
        });
        grid.appendChild(card);
    });
    
    songGrid.appendChild(section);
}





