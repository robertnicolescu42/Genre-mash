//document.write("hai sa luam aceasta paine!");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomGenre(array){
	var nr = getRandomInt(0,array.length-1);
	return array[nr];
}

function wikiSearch(genre)
{
	var search = "https://en.wikipedia.org/wiki/" + genre;
	return search;
}

function output()
{	var gen1 = getRandomGenre(popular_genres);
	var gen2 = getRandomGenre(popular_genres);
	var gen3 = getRandomGenre(popular_genres);

	gen1mod = wikiSearch(gen1.replace(/ /g,"_"));
	gen2mod = wikiSearch(gen2.replace(/ /g,"_"));
	gen3mod = wikiSearch(gen3.replace(/ /g,"_"));

	document.write("<div class = 'genuri' >");
	document.write("Simple genre: ");
	document.write("<a target='_blank' href=" + gen1mod + ">" + gen1 + "</a>" + " at "  + getRandomInt(60,200) + " BPM." + "<br>");
	document.write("Complex genre: ");
	document.write("<a target='_blank' href=" + gen2mod + ">" + gen2 + "</a>" + " + " +
				   "<a target='_blank' href=" + gen3mod + ">" + gen3 + "</a>" + " at "  + getRandomInt(60,200) + " BPM.");
	document.write("</div>");
}


var popular_genres = ['Afrobeat', 'African hip hop', 'African heavy metal', 'Highlife', 'Hiplife', 'Gospel', 'Chinese rock', 'Enka', 'J-pop', 'K-pop', 'Goa trance', 'Apala', 'Experimental', 'Noise', 'Lo-fi', 'Electroacoustic', 'Blues', 'Rumba', 'Punta', 'Bouyon', 'Comedy', 'Novelty', 'Parody', 'Alternative country', 'Cowpunk', 'Christian country', 'Classic country', 'Close harmony', 'Christian', 'Classic', 'Background music', 'Elevator music', 'Furniture music', 'Lounge music', 'Middle of the road music', 'New-age music', 'Ambient', 'Ambient dub', 'Dark ambient', 'Drone', 'Space', 'Illbient', 'Psybient', 'Breakbeat', 'Acid breaks', 'Baltimore club', 'Jersey club', 'Big beat', 'Broken beat', 'Florida breaks', 'Nu-funk', 'Miami bass', 'Nu skool breaks', 'Disco', 'Afro/Cosmic', 'Disco polo', 'Euro disco', 'Italo disco', 'Nu-disco', 'Space disco', 'Downtempo', 'Acid jazz', 'Chill-out', 'New-age', 'Space', 'Trip hop', 'Drum and bass', 'Liquid funk', 'Neurofunk', 'Neurohop', 'Jump-up', 'Darkstep', 'Drumstep', 'Funkstep', 'Hardstep', 'Sambass', 'Techstep', 'Dub', 'Ambient dub', 'Dancehall', 'Dub poetry', 'Dub reggae', 'Dub techno', 'Dubstep', 'Dubtronica', 'Electro', 'Freestyle', 'Electro-industrial', 'Electroacoustic', 'Acousmatic', 'Musique concrÃ¨te', 'Modular', 'Electronic rock', 'Alternative dance', 'Indietronica', 'Coldwave', 'Dance-punk', 'Dark wave', 'Electroclash', 'Electronicore', 'Nintendocore', 'Electropunk', 'Ethereal wave', 'Krautrock', 'Minimal wave', 'New rave', 'Nu-gaze', 'Space rock', 'Synthpop', 'Electronica', 'Dubtronica', 'Folktronica', 'Funktronica', 'Laptronica', 'Livetronica', 'Ethnic electronica', 'Al Jeel', 'Arabic pop', 'Asian underground', 'Bhangra', 'Bhangragga', 'C-pop', 'Cantopop', 'J-pop', 'City pop', 'Shibuya-kei', 'K-pop', 'Worldbeat', 'Hardcore', 'Gabber', '4-beat', 'Breakbeat hardcore', 'Bouncy techno', 'Breakcore', 'Hardbass', 'Digital hardcore', 'Darkcore', 'Happy hardcore', 'MÃ¡kina', 'Speedcore', 'Splittercore', 'Extratone', 'UK hardcore', 'Hardstyle', 'Dubstyle', 'Jumpstyle', 'Lento violento', 'Hi-NRG', 'Eurobeat', 'Eurodance', 'Bubblegum dance', 'Hard dance', 'Italo dance', 'Hip hop', 'Breakbeat', 'Crunk', 'Electro', 'Hip house', 'Trap', 'Trap EDM', 'Drill', 'UK drill', 'House (see below)', 'Industrial', 'Aggrotech', 'Electrogrind', 'Electro-industrial', 'Dark ambient', 'Dark electro', 'Electronic body', 'Futurepop', 'New beat', 'Industrial metal', 'Industrial rock', 'Japanoise', 'Power electronics', 'Death industrial', 'Power noise', 'Intelligent dance', 'Glitch', 'Glitch Hop', 'Wonky', 'Oldschool jungle', 'Darkcore', 'Ragga jungle', 'Raggacore', 'Post-disco', 'Boogie', 'Electropop', 'Chillwave', 'Vaporwave', 'Hardvapour', 'Dance-pop', 'Dance-rock', 'Techno', 'Acid techno', 'Detroit techno', 'Dub techno', 'Hardtechno', 'Industrial techno', 'Minimal techno', 'New beat', 'Nortec', 'Tecno brega', 'Techdombe', 'Trance', 'Acid trance', 'Balearic trance', 'Dream trance', 'Euro-trance', 'Hard trance', 'Nitzhonot', 'Psychedelic trance', 'Full on', 'Suomisaundi', 'Progressive trance', 'Tech trance', 'Uplifting trance', 'Vocal trance', 'UK garage', '2-step garage', 'Dubstep', 'Brostep', 'Drumstep', 'Reggaestep', 'Vomitstep', 'Breakstep', 'Future garage', 'Grime', 'UK drill', 'Grindie', 'Speed garage', 'Bassline', 'UK funky', 'Nightcore', 'Acid house', 'Ambient house', 'Balearic beat', 'Chicago house', 'Deep house', 'Diva house', 'Hardbag', 'Electro house', 'Big room house', 'Complextro', 'Dutch house', 'Fidget house', 'French house', 'Nu-disco', 'Funky house', 'Future house', 'Garage house', 'Ghetto house', 'Ghettotech', 'Juke house', 'Footwork', 'Hard house', 'Hard dance', 'Hip house', 'Italo house', 'Nu jazz', 'Kidandali', 'Kwaito', 'Latin house', 'Microhouse', 'Moombahton', 'Moombahcore', 'Progressive house', 'Rara tech', 'Tech house', 'Tribal house', 'Tropical house', 'Witch house', 'Folk', 'Anti-folk', 'Celtic', 'Indie folk', 'Neofolk', 'Protest song', 'Alternative hip hop', 'Australian hip hop', 'Bongo Flava', 'Boom bap', 'British hip hop', 'Chap hop', 'Chopper', 'Christian hip hop', 'Cloud rap', 'Conscious hip hop', 'Crunk', 'Crunkcore', 'Drill', 'Electro', 'Emo hip hop', 'Experimental hip hop', 'G-funk', 'Ghetto house', 'Ghettotech', 'Golden age hip hop', 'Grime', 'Hardcore hip hop', 'Hip house', 'Hiplife', 'Hip pop', 'Hyphy', 'Industrial hip hop', 'Instrumental hip hop', 'Jazz rap', 'Jersey club', 'Kwaito', 'Lyrical hip hop', 'Low Bap', 'Merenrap', 'Motswako', 'Mumble rap', 'Nerdcore', 'New jack swing', 'New school hip hop', 'Old school hip hop', 'Political hip hop', 'Ragga', 'Reggaeton', 'Snap', "Jerkin'", 'Trap', 'Urban Pasifika', 'Emo rap', 'K-rap', 'J-rap', 'Horrorcore', 'Acid jazz', 'Afro-Cuban jazz', 'Asian American jazz', 'Avant-garde jazz', 'Bebop', 'Boogie-woogie', 'Bossa nova', 'British dance band', 'Cape jazz', 'Chamber jazz', 'Continental jazz', 'Cool jazz', 'Crossover jazz', 'Dixieland', 'Ethno jazz', 'European free jazz', 'Free funk', 'Free improvisation', 'Free jazz', 'Gypsy jazz', 'Hard bop', 'Arabic pop', 'Baroque pop', 'Brill Building', 'Britpop', 'Bubblegum pop', 'CanciÃ³n', 'Canzone', 'Chalga', 'Chanson', 'Christian pop', 'Classical crossover', 'Country pop', 'C-pop', 'Hokkien pop', 'Mandopop', 'Dance-pop', 'Disco polo', 'Electropop', 'Europop', 'Austropop', 'Eurobeat', 'French pop', 'Italo dance', 'Italo disco', 'Latin pop', 'Nederpop', 'Russian pop', 'Fado', 'Folk pop', 'Iranian pop', 'Indie pop', 'J-pop', 'Jangle pop', 'K-pop', 'Korean hip hop', 'Korean rock', "T'ong guitar", 'Trot', 'Latin ballad', 'Swamp pop', 'Mexican pop', 'New Romantic', 'Operatic pop', 'Pop rap', 'Pop rock', 'Power pop', 'Soft rock', 'Pop punk', 'Neon pop', 'Emo pop', 'Pop soul', 'Progressive pop', 'Psychedelic pop', 'Rebetiko', 'Schlager', 'Sophisti-pop', 'Space age pop', 'Sunshine pop', 'Surf', 'Synthpop', 'Teen pop', 'Traditional pop', 'Turkish pop', 'Vispop', 'Wonky pop', 'Worldbeat', 'P-Funk', 'Post-disco', 'Boogie', 'Soul', 'Neo-Soul', 'Alternative rock', 'Grunge', 'Post-Grunge', 'Math rock', 'Sadcore', 'Slowcore', 'Dark cabaret', 'Electronic rock', 'Experimental rock', 'Art rock', 'Post-punk', 'Gothic rock', 'No Wave', 'Noise rock', 'Post-rock', 'Post-metal', 'Garage rock', 'Glam rock', 'Hard rock', 'Heavy metal', 'Jazz rock', 'New wave', 'Psychedelic rock', 'Acid rock', 'Freakbeat', 'Neo-psychedelia', 'Raga rock', 'Metal', 'Techno', 'Acid', 'Psy', 'Meme'];

output();

