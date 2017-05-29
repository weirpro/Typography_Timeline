/* Add border around circle that is selected?*/

var techcolor1 = 'rgb(38, 180, 131)'
var techcolor2 = 'rgb(46, 160, 121)'
var techcolor3 = 'rgb(56, 144, 113)'
var techcolor4 = 'rgb(51, 126, 99)'
var techcolor5 = 'rgb(45, 111, 88)'

var maincolor = '#1e94b0'

var typecolor1 = 'rgb(135, 120, 226)'
var typecolor2 = 'rgb(124, 112, 195)'
var typecolor3 = 'rgb(117, 109, 167)'
var typecolor4 = 'rgb(129, 122, 170)'
var typecolor5 = 'rgb(110, 106, 136)'
var typecolor6 = 'rgb(91, 88, 106)'

var medTLcolor = '#2d5058'
var renTLcolor = '#386974'
var enlTLcolor = '#4c8390'
var indTLcolor = '#5994a2'
var earTLcolor = '#74aebc'
var eleTLcolor = '#acd2db'


/*MEDIEVAL 1100-1500 so 400yrs*/
var medievaltype = [
["Fraktur",1150,37,typecolor2,"Fraktur became the most common German blackletter typeface by the mid-16th century.It continued to be used in Germany until the 20th century when its use was forbidden by Adolf Hitler. Its name, derived from the words “broken” or “fractured”, implies its form which includes a high degree of “breaking”, i.e. lines that do not necessarily connect with each other, especially in curved letters.","Germany"],
["Blackletter",1300,25,typecolor1,"Blackletter refers to the calligraphic script used by scribes throughout Western Europe from approximately 1150 to the 17th century. Derived from Carolingian miniscules, Blackletter is characterized by sharp narrow letters with broken angular lines which make it hard to read. The earliest typefaces used in printing (including those in the Gutenberg Bible) were modeled after handwritten Blackletter script.","Germany"],
["Humanist",1400,25,typecolor1,"typefaces were created during the 15th century by Venetian printers. These typefaces imitated the formal handwriting found in the humanistic (Renaissance) manuscripts of the time. Humanist typefaces are round (in opposition to Blackletter) and are characterized by short and thick bracketed serifs, a slanted cross stroke on the lowercase ‘e’, ascenders with slanted serifs, and low contrast between horizontals and verticals.They are still widely used today."],
["Jenson",1470,25,typecolor1,"Printer Nicolas Jenson a French national working in Venice, created the typeface which bears his name. It was renowned for its evenness and the comfortable fit of its letters as words, as well as the beautiful proportions of the letterforms themselves. It a highly readable typeface appropriate for large amounts of text. A model for good typeface design, it has inspired many revivals.","Italy"],
["Oldstyle",1485,25,typecolor1,"Oldstyle type began with the Italian punchcutter Francesco Griffo. Old style letters are characterized by the diagonal stress of handwriting in round letters and have sloped, bracketed or tapered serifs. Oldstyle capitals were influenced by carved roman capitals (majuscules); lowercase oldstyle letters were inspired by fifteenth century humanistic writing (minuscules)."],
["Bembo",1496,25,typecolor1,"Commissioned by Aldus Manutias for the Aldine Press and designed by Francesco Griffo, Bembo is named after the writer Pietro Bembo. Bembo has a more consistent and quieter weight stress and variation than its precedents. Making the uppercase letters shorter than the ascenders in the lower case creates a more even texture on the page. Its serene quality makes Bembo an excellent book face.","Italy"],
];
var medievaltech = [   
["Letterpress",1450,25,techcolor1,"Johannes Gutenberg’s moveable type printing press (or letterpress) created in Mainz, Germany, combined the grape screw press used in winemaking with the system of moveable type developed by the Chinese. Combining these two technologies and using his goldsmithing skills to develop more durable metal type, automated printing and reduced the price of books, making them more accessible.","Germany"],
];


var renaissancetype = [
["Italic",1500,37,typecolor2,"The first italic typeface was produced by Aldus Manutias. Its purpose was to save space in compact “pocket” books by condensing the width of the letters. Based on humanist cursive script, italics retained the slant of handwriting. Unlike the italic type used today however, early italics had only a modest slope and all capital letters were upright roman letters with no slant."],
["Aldine",1501,25,typecolor1,"The typecutter Francesco Griffo created the typeface Aldine for Aldus Manutias’ 1501 pocketbook edition of the poetry of the Roman poet Virgil. Aldine italic was very popular in its own day and became the model for other italic types. It was widely (and poorly) imitated.","Italy"],
["Script",1525,25,typecolor1,"Script fonts imitate the cursive handwriting of early humanists who used a broad nib pen. Characteristics include a diagonal stress in round letters (borrowed from the slant of handwriting). Scripts are different from italics in that the strokes of letters actually connect with one another at the base. Though not appropriate in lengthy text settings, script is still widely used in shorter applications such as invitations."],
["Civilité",1557,25,typecolor1,"The Frenchman Robert Granjon designed the first script typeface, known as civilité-letter, in 1557. It was originally used in contracts and includes theatrical flourishes at the end of lines. These gestural strokes resemble the lines written on bank checks to ensure that no additional terms could be added. Civilité was also used for devotionals or proclamations.","France"],
];
var renaissancetech = [0]



var enlightenmenttype = [
["Modern",1700,25,typecolor1,"Modern typestyles evolved from Transitional styles. Modern type is based on a machine aesthetic as opposed to handwriting. It is characterized by a strong geometric quality (evident in the vertical weight of rounded characters) and extreme contrast between thick and thin strokes. Also typical are horizontal hairline serifs that join the stems at a right angle without bracketing."],
["Transitional",1730,25,typecolor1,"Type created in the middle of the eighteenth century when typestyles evolved from Old Style to Modern is known as Transitional. It is charcterized by greater contrast between thick and thin strokes, more horizontal serifs in the lowercase, and less diagonal stress within rounded forms. Transitional forms are also ususally wider than old style characters."],
["Baskerville",1757,25,typecolor1,"John Baskerville explored ways of improving the printing press to make it capable of more subtle impressions with greater precision. His sense of perfection and attention to details contributed greatly to the design of a detailed typeface influenced by the copperplate engraving of the period. Baskerville is characterized by open letterforms that give the page a light grey appearance. The most distinct letter in the face is the capital “Q” which has a sweeping tail.","England"],
["Bodoni",1798,25,typecolor1,"Considered the first “modern” typeface, Bodoni was designed by the Italian printer Giambattista Bodoni. The typeface has a pronounced verticality and overall geometric construction that is a dramatic departure from its calligraphic influence. Bodoni’s extreme contrast of thick and thin strokes, flat unbracketed serifs, and round dot over the letter “i” are among its identifying charcteristics.","Italy"],
["Slab Serif",1815,40,typecolor2,"Slab serifs evolved out of the desire for eye-catching display letters for advertising posters and handbills in the early 19th century. The first slab serifed typeface (Antique) was designed by the Englishman Vincent Figgens. Slab serifs are characterized by bold heavy square-cornered serifs (usually without brackets), minimal stress in rounded letters, and little contrast between thick and thin strokes. Slab serifs became known as Egyptian typefaces after Napoleon’s conquest of Egypt. Although there was no relationship between Egyptian writing systems and slab serif types, their form does mimic the base and capital of Egytian columns."],
["Sans Serif",1816,25,typecolor1,"The first sans serif type appeared in 1816 in a specimen book by the English typefounder William Caslon IV. Sans serif type, as the name implies, lacks serifs. Other characteristics shared by most sans serif type include vertical stress and more uniform strokes. Though most sans serif faces include geometric construction, some combine organic and geometric qualities."],
];
var enlightenmenttech = [   
["Lithography",1796,25,techcolor1,"Lithography is a printing process in which an image is drawn (in reverse) into an oily substance on a smoothed stone and then transferred to a piece of paper. Lithography works because of the mutual repulsion of oil and water. It was invented by Alois Senefelder as a cheap method of publishing theatrical works.","France"],
["Steel Nib Pen",1822,25,techcolor1,"The pointed steel nib pen, first manufactured by John Mitchell in Birmingham, England retained a sharp point much longer than either reed or quill pens. Its sharp point, rather than broad edge, brought about a shift in the style of letters including greater contrast between thick and thin strokes. English Round Hand and Copperplate scripts were developed with steel nib pens.","England"],
];


var industrialtype = [0];

var industrialtech = [   
["Halftone",1850,25,techcolor1,"The halftone is a reprographic technique that simulates continuous tone imagery through the use of dots, varying either in size, in shape, or in spacing. Developed by William Fox Talbot, the halftone process enabled photographs (with a full tonal range) to be reproduction on the same page with typographic elements.","England"],
["Typewriter",1868,25,techcolor1,"This was one of the first machines to offer an alternative to handwriting, transcribe letters onto paper one after another as in writing. The QWERTY keyboard, designed to slow down the typing process and separate frequently used pairs of letters so that the typebars would not get tangled together, has been incorporated into later devices such as the Linotype and computer. Typewriters typically had only a handful of typefaces (of fixed-width) and one or two font sizes (pica or elite).","England"],
["Offset Lithography",1875,25,techcolor1,"The most common kind of offset lithography is derived from the photo offset process, which involves using light-sensitive chemicals and photographic techniques to transfer type and images from film negatives to printing plates. These flexible plates are wrapped around cylindrical drums and are inked. The inked image is then trasferred (or “offset”) from the plate to a rubber blanket and finally to paper.","England"],
["Linotype",1884,25,techcolor1,"Linotype, invented by Ottmar Mergenthaler, automated typesetting by producing an entire line of metal type at once. Metallic letter molds (matrices) were assembled using a typewriter keyboard and filled with molten metal to cast the type. This was a significant improvement over the previous industry standard; manual, letter-by-letter typesetting using a composing stick and drawers of letters.","Germany"],
];


var earlytype = [
["Futura",1927,25,typecolor1,"Futura was designed by the German book designer Paul Renner. Its initial design was built on a circle, square, and triangle using a compass and straightedge and became the paradigm of a geometic sans serif. Its final form however, was not geometrically perfect and its strokes were not a uniform width. Its architectural form and function together with its lack of decoration emodied the spirit of the modernist movement.","England"],
["Memphis",1929,25,typecolor1,"The typeface Memphis (named after the capital of ancient Egypt) was originally designed by the German Rudolf Wolf for the Stemple Foundry. The typeface is a variant of the sans serif Futura typeface and shares its geometric form. It is considered a monoweight since its stems and serifs appear to have the same weight. Peculiarities which make the typeface unique include upper and lowercase “O’s” which are perfect circles and a lower case “r” with a circular ear. Memphis is suitable for both display and text applications.","Germany"],
["Oakland",1985,25,typecolor1,"Oakland, designed by Zuzana Licko, was one of the first fonts designed specifically to embrace the course rendering of fonts on a macintosh computer and dot matrix printer. Using public domain software, Licko created Oakland’s four fixed-size fonts of increasingly refine resolution (Oakland, 6, 8, 10, and 15) which were released in Emigré, a magazine founded by Licko and her husband Rudy Vanderlans. Emigré opened up the market for smaller type foundries and emerged as a showcase for cutting edge type design.","USA"],
["Machine Readable",1960,25,typecolor1,"Machine readable fonts utilize optical character recognition and are designed to be read by machines as well as humans. They are characterized by a simplicity of form and monospacing (fixed widths). Machine readable fonts are mostly used by banks, credit card companies, and other businesses that process large amounts of printed data by machine."],
["Bitmapped",1980,25,typecolor1,"Bitmapped fonts were created for the course resolutions of computer screens and dot-matrix printers. Rendered on a matrix or grid of square cells or pixels, each bit that made up an image corresponded to one pixel. The biggest disadvantage of bitmapped fonts was that diagonal elements appear as jagged edges when enlarged. Bitmapped fonts became obsolete with the development of high resolution computer screens and output devices."],
];
var earlytech = [   
["Electronic Digital Computer",1940,-25,techcolor1,"The first electronic digital computers were the size of a large room, consuming as much power as several hundred modern personal computers. They were used primarily for military applications.","USA"],
["OCR-B",1968,-25,techcolor1,"OCR-B, designed by the Swiss type designer Adrian Frutiger, is the European counterpart to OCR-A. It is designed to read by both machines and humans and it has a less technical look than OCR-A. Declared a world standard, it is widely used for UPC / EAN barcodes.","Switzerland"],
["IBM Selectric Typewriter",1961,-25,techcolor1,"The Selectric was known as the carriageless typewriter.It replaced the traditional typewriter’s moving carriage with a roller that stayed in position while a typeball and ribbon mechanism moved from side to side eliminating the problem of clashing typebars. It also incorporated word processing and an ability to change fonts which became important features in desktop publishing.","USA"],
["LetraSet",1961,-25,techcolor1,"LetraSet was a kind of do-it-yourself lettering. You could “set” your own type by simply positioning a polyethylene sheet of dry transfer lettering with a low tack adhesive over a piece of paper and rubbing it onto the surface below.","England"],
["Dot Matrix Printer",1970,-25,techcolor1,"The Dot matrix printer was a low-end printer commonly used with the first personal computers. It included a print head that ran back and forth on the page and printed by impact, striking an ink-soaked cloth ribbon against the paper much like the print mechanism on a typewriter. It was extremely noisy and produced very low res (pixelated) type and images.","USA"],
["Portable Computer",1975,-25,techcolor1,"The first portable computer was the IBM 5100 (introduced six years before the first IBM PC). It had 64 KB of RAM, was the size of a small suitcase, and weighed about 55 lbs. The unit included a small keyboard and a 5” diagonal CRT display.","USA"],
["Apple Macintosh Computer",1984,-85,techcolor5,"The Mactintosh was the first commercially successful personal computer with a mouse and a graphical user interface (GUI). It also developed the concept of what you see is what you get (WYSIWYG) printing. The Macintosh put unprecedented power into the hands of the user. It democratized computing and revolutionalized the design and production of type, eliminating specialized typesetting companies.","USA"],
["PostScript",1984,-70,techcolor4,"PostScript, a page description language which treats type as objects rather than as bit maps, was released by Adobe Systems, Inc. in 1984. Defining lines with Bézier curves allows letters to be scaleable so they can be used at any size without losing sharpness or quality.","USA"],
["Apple Laser Writer",1985,-55,techcolor3,"Apple’s first laser printer, the LaserWriter, had Adobe’s high quality scalable PostScript-fonts built into its memory. In combination with WYSIWYG publishing software like PageMaker the LaserWriter was a key component in the development of desktop publishing.","USA"],
["PageMaker",1985,-40,techcolor2,"PageMaker was one of the first software programs available for use with desktop computers that supported the integration of type and image into page layouts. Its graphical user interface made it easy to use and helped popularize the Apple Macintosh computer and Desktop Publishing.","USA"],
["Fontographer",1986,-25,techcolor1,"Fontographer was the first commerically available software for editing Bézier curves on a personal computer. Developed for the Mac (before Adobe Illustrator) it allowed high quality fonts (in the PostScript format) to be developed for a fraction of the cost of other existing methods. Fontographer lead to the democratization of type design enabling self-taught type designers to produce fonts for professional use without substantial capital investment.","USA"],
];


var electronictype = [
["Random",1990,100,typecolor6,"Random fonts challenged the notion of the fixed and non-varying nature of type carried over from print technology which takes one form and copies it over and over again. If we can read the natural variations of handwriting, it reasoned, the sameness of type is not necessary."],
["Beowolf",1990,85,typecolor5,"Beowolf was designed by Letterror, the Dutch duo of Erik van Blokland and Just van Rossum. It was digitized by hand in Ikarus and then programmed to change at random during printing. It challenged the notion that outline fonts are inherently superior to bitmapped ones and was proof that fonts were no longer physical objects - but rather instructions. The name came from the poem ‘Beowulf’, which resists traditional modes of literary criticism because it cannot be treated as a unique, fixed document.","Netherlands"],
["Grunge",1990,70,typecolor4,"Grunge fonts are dirty, abstract, typefaces whose messey and edgy qualities represent the antithesis of the hygenic purity of the machine age. They were typically hand-scrawled scratchy marks that referenced urban graffiti. They represented the new found interest in the vernacular that had arisen alongside — and often in opposition to — the computer in the 1980s."],
["Template Gothic",1990,55,typecolor3,"Designed by Barry Deck, Template Gothic was inspired by a degraded stenciled sign hung in his neighborhood laundromat. The vernacular source of his typeface referenced a process that is both mechanical and manual letters drawn with a plastic stencil. Template Gothic was ubiquitous by the end of the 1990s, representing the desire during the grunge era to abandon the perfection of modernist letterforms and embrace an imperfect world.","USA"],
["Mashed",1990,40,typecolor2,"Adobe’s 1989 decision to end the encryption of its PostScript fonts coupled with the cut and paste features in software programs such as Fontographer, opend the door for hacking type. Mashed typefaces (or mash-ups) are a patchwork of pre-existing fonts cut and pasted from different sources. Experimental in nature, they were often somewhat crudely executed and intentionally unfinished and imperfect."],
["Dead History",1990,25,typecolor1,"Designer P. Scott Makela looked to the future, not the past, for inspiration for his typeface Dead History. A manipulation of the vectors of two exiting typefaces Linotype Centennial (a traditional serif) and Adobe’s VAG Rounded (a kind of pop classic), Dead History exemplifies the “sampling” approach to type design that Fontographer made possible. According to him, Dead History “personifies a new attitude in type creation . . . the result of the computer’s capabilities to function as the perfect assembling tool.","USA"],
["Blur",1992,25,typecolor1,"British designer Neville Brody’s typeface, Blur, a mutant manipulated type, embraced its own imperfection. Its biomorphic features were created by running Helvetica through Photoshop’s blur filter and then vectorizing the results.","UK"],
["Walker",1995,25,typecolor1,"Walker, designed by Matthew Carter, is one of the first interactive and mutable typefaces. It was commissioned as part of the branding system for the Walker Art Center in Minneapolis and is used exclusively by the museum’s in-house designers. A sans-serif typeface with optional snap on/off serifs for certain letters and a flexible underlining system, Walker represents the diversity of the museum’s programming.","USA"],
["Verdana",1996,25,typecolor1,"Matthew Carter’s widely used face is regarded as the ultimate example of readability on the web. Designed specifically to be viewed at small sizes on a computer screen, it is characterized by the square dot over the “i”, lack of serifs, large x-height, wide proportions, loose letter-spacing, large counters, and emphasized distinctions between similarly-shaped characters (such as i, I, and 1) all of which help increase its legibility.","USA"],
["Constantia",2007,25,typecolor1,"Commissioned by MicroSoft, Canadian designer John Hudson created Constantia specifically for use with both print and electronic media. This flexibility was intended to help develop a consistent brand across media platforms. The typeface is characterized by modulated wedge shaped serifs, a relatively small x-height, and long ascenders and descenders. Its porportions make it a good book face. Other Cleartype fonts include Corbel, Calibri, Consolas,Candara, Cambria, Constantia.","Canada"],
["Averia",2011,25,typecolor1,"Dan Sayers, a non-designer, created Avería overlapping and computationally averaging the 725 fonts on his computer and morphing them into new shapes. Avería is a Spanish word derived from the root of the word <i>average.</i>","USA"],
];
var electronictech = [   
["Blurred",1990,-55,techcolor3,"Blurred type explored new typographic forms using Adobe Photoshop. Although Photoshop (which was introduced in 1990) was designed for the manipulation and reproduction of photographs, designers soon began to explore its ability to set and edit type."],
["Interactive",1990,-40,techcolor2,"Interactive typefaces built on the concept of mashed fonts with one important difference – they invited the users themselves to become involved in making changes to their form. Alterations previously the exclusive domain of the types’ creators were placed in the hands of a wider audience who could make changes at will using computer-based applications."],
["Web-Safe",1990,-25,techcolor1,"Web-safe fonts are so called “resident” fonts that come installed on a wide range of computers as part of their operating systems. This guarantees that any content designed using these fonts will be displayed in the same font (on both Macs and PCs) and no substitutions will occurr. Websafe fonts include Andale Mono, Arial, Arial Black, Comic Sans, Courier New, Georgia, Impact, Times New Roman, Trebuchet, Verdana and Wingdings.","no country"],
["Cleartype",2000,-55,techcolor3,"Cleartype is a font display technology developed by MicroSoft that improves the readability of text viewed in its windows operating system on LCD screens of all sizes. By breaking down pixels into smaller sub-pixels it renders the jagged edges of diagonals more smoothly."],
["Intelligent",2000,-40,techcolor2,"Intelligent typefaces are dynamic in form and responsive to real time input. Intelligent fonts throw most typographical conventions out the window."],
["Generative",2000,-25,techcolor1,"Generative typography creates new versions of existing typefaces using a computational algorithmic process to transform existing typefaces into new versions of themselves."],
["Processing",2001,-25,techcolor1,"Processing is an Open Source programming language and visualization tool created by Ben Fry and Casey Reas. Its accessibility and ease of use has made it a popular tool for experimenting with the design of new typefaces.","USA"],
["iPhone",2007,-25,techcolor1,"The iPhone was the first portable multi-use smartphone with audio-visual media capabilties and wi-fi and cellular data connectivity. Its multi-touch screen and virtual keyboard made it very user-friendly.","USA"],
["iPad",2010,-25,techcolor1,"The iPad is a tablet computer developed by Apple Inc. as a personal platform for audio-visual media including books, periodicals, movies, music, games, apps and web content. Its design, which makes the hands-on experience intuitive and the technology invisible, coupled with its razor sharp type, has greatly accelerated the development of e-books.","USA"],
  ];



/* TEXT FUNCTIONS*/
/* TEXT FUNCTIONS*/
/* TEXT FUNCTIONS*/
/* TEXT FUNCTIONS*/
var TypeCirY = 425
var TechCirY = 375

            


function drawMainTL() {
    d3.select('#svg')
    .append('rect')
    .attr('id', "MainTL")
    .attr('x', 0)
    .attr('y', 350)
    .attr('height', 100)
    .attr('width', 1025)
    .style('fill', maincolor)   
}

function drawMainTitle () {
    d3.select('#svg')
    .append("text")
    .attr('x', 35)
    .attr('y', 385)
    .attr('fill', 'white')
    .style('font-family', 'Avenir-light')
    .style('font-size', 25)
    .text("Technology")
    
    d3.select('#svg')
    .append("text")
    .attr('x', 170)
    .attr('y', 385)
    .attr('fill', 'white')
    .style('font-family', 'Avenir-light')
    .style('font-size', 25)
    .text("&")
    
    d3.select('#svg')
    .append("text")
    .attr('x', 35)
    .attr('y', 413)
    .attr('fill', 'white')
    .style('font-family', 'Avenir-light')
    .style('font-size', 25)
    .text("Type")
}

function drawTLtitle () {
    d3.select('#svg')
    .append("text")
    .attr('id', "EraTitle")
    .attr('x', 340)
    .attr('y', 405)
    .style('font-size', 40)
    .attr('fill', 'white')
    .style('font-family', 'Avenir')
    .text("")
}

function drawTLyear () {
    d3.select('#svg')
    .append("text")
    .attr('id', "EraYear")
    .attr('x', 880)
    .attr('y', 405)
    .style('font-size', 23)
    .attr('fill', 'white')
    .style('font-family', 'Avenir')
    .text("")
}

function reset(){
    d3.select('#svg')
    .append('rect')
    .attr('id', "reset")
    .attr('x', 0)
    .attr('y', 350)
    .attr('height', 100)
    .attr('width', 250)
    .style('fill', 'black') 
    .style('opacity', 0)
 .on('click', function(){
        /*Reset TYPE circles*/  
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 0)")
        .style("opacity", 1);
        
        /*Reset TECH circles*/  
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .IndTechCir, .EarTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 0)")
        .style("opacity", 1);
        
         d3.selectAll('#EraTitle, #EraYear, #TypeText, #TypeTitle, #TypeYear, #TechText, #TechTitle, #TechYear')
         .text("");
        
        
        d3.select('#TLMidieval')
        .transition()
        .duration(500)
        .style('fill', medTLcolor);
        
        d3.select('#TLRenaissance')
        .transition()
        .duration(500)
        .style('fill', renTLcolor);
        
        d3.select('#TLEnlight')
        .transition()
        .duration(500)
        .style('fill', enlTLcolor);
        
        d3.select('#TLIndRev')
        .transition()
        .duration(500)
        .style('fill', indTLcolor);
        
        d3.select('#TLEarly20th')
        .transition()
        .duration(500)
        .style('fill', earTLcolor);
    
        d3.select('#TLElectronic')
        .transition()
        .duration(500)
        .style('fill', eleTLcolor);
        
    })
}

/*TECH INFO*/
/*TECH INFO*/
/*TECH INFO*/

function drawTechTitle () {
    d3.select('#svg')
    .append("text")
    .attr('id', "TechTitle")
    .attr('x', '340')
    .attr('y', '35')
    .style('font-size', '25')
    .style('font-family', 'Halant')
    .attr('fill', techcolor5)
    .text("")
}

function drawTechYear () {
    d3.select('#svg')
    .append("text")
    .attr('id', "TechYear")
    .attr('x', '320')
    .attr('y', '85')
    .attr('text-anchor', 'end')
    .attr('opacity', .25)
    .attr('fill', techcolor1)
    .style('font-size', '100')
    .style('font-family', 'Halant')
    .text("")
}
function drawTechText () {
    d3.select('body').select('#AllText')
    .append("div")
    .attr('id', 'TechText')
    .style('top', '45px')
    .style('width', '305px')
    .style('font-size', '15px')
    .style('font-family', 'Halant')
    .text("")
}


/*TYPE INFO*/
/*TYPE INFO*/
/*TYPE INFO*/

function drawTypeTitle () {
    d3.select('#svg')
    .append("text")
    .attr('id', "TypeTitle")
    .attr('x', '340')
    .attr('y', '500')
    .style('font-size', '25')
    .style('font-family', 'Halant')
    .attr('fill', typecolor6)
    .text("")
}

function drawTypeYear () {
    d3.select('#svg')
    .append("text")
    .attr('id', "TypeYear")
    .attr('x', '320')
    .attr('y', '550')
    .attr('text-anchor', 'end')
    .style('font-size', '100')
    .style('font-family', 'Halant')
    .attr('opacity', .3)
    .attr('fill', typecolor1)
    .text("")
}
function drawTypeText () {
    d3.select('body').select('#AllText')
    .append("div")
    .attr('id', 'TypeText')
    .style('top', '510px')
    .style('width', '305px')
    .style('font-size', '15px')
    .style('font-family', 'Halant')
    .text("")
}


function drawCircles (){        
//medieval tech
    d3.select('#svg')
        .selectAll("MedTechCir") 
        .data(medievaltech) 
        .enter() 
        .append("circle") 
        .attr("class", "MedTechCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1100)*2.56;
            })
        .attr("cy", TechCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {        
        if(i == 0) {
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .IndTechCir, .EarTechCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
            
            
            d3.select('#TechText')
            .text(function(d,i) {
                 return medievaltech[0][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return medievaltech[0][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return medievaltech[0][1];
            });
       }
    });
//Medieval type  
    d3.select('#svg')
        .selectAll("MedTypeCir") 
        .data(medievaltype) 
        .enter() 
        .append("circle") 
        .attr("class", "MedTypeCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1100)*2.56;
            })
        .attr("cy", TypeCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
        
        if(i == 0) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return medievaltype[0][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return medievaltype[0][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return medievaltype[0][1];
            });
       }
        else if(i == 1) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return medievaltype[1][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return medievaltype[1][0];
            }); 
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return medievaltype[1][1];
            });
       }
        else if(i == 2) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return medievaltype[2][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return medievaltype[2][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return medievaltype[2][1];
            });
       }
        else if(i == 3) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return medievaltype[3][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return medievaltype[3][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return medievaltype[3][1];
            });
       }
        else if(i == 4) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return medievaltype[4][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return medievaltype[4][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return medievaltype[4][1];
            });
       }
        else if(i == 5) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return medievaltype[5][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return medievaltype[5][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return medievaltype[5][1];
            });
       }

    });
//Renaissance Tech
    
//Renaissance Type
    d3.select('#svg')
        .selectAll("RenTypeCir") 
        .data(renaissancetype) 
        .enter() 
        .append("circle") 
        .attr("class", "RenTypeCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1500)*5.12;
            })
        .attr("cy", TypeCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir, .EleTypeCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
            
        if(i == 0) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return renaissancetype[0][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return renaissancetype[0][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return renaissancetype[0][1];
            });
       }
        else if(i == 1) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return renaissancetype[1][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return renaissancetype[1][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return renaissancetype[1][1];
            });
       }
        else if(i == 2) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return renaissancetype[2][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return renaissancetype[2][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return renaissancetype[2][1];
            });
       }
        else if(i == 3) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return renaissancetype[3][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return renaissancetype[3][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return renaissancetype[3][1];
            });
       }

    });

//Enlightenment tech
    d3.select('#svg')
        .selectAll("EnlTechCir") 
        .data(enlightenmenttech) 
        .enter() 
        .append("circle") 
        .attr("class", "EnlTechCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1100)*2.56;
            })
        .attr("cy", TechCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .IndTechCir, .EarTechCir, .EleTechCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
        
        if(i == 0) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return enlightenmenttech[0][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return enlightenmenttech[0][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return enlightenmenttech[0][1];
            });
       }

    });
    
//Enlightenment type
        d3.select('#svg')
        .selectAll("EnlTypeCir") 
        .data(enlightenmenttype) 
        .enter() 
        .append("circle") 
        .attr("class", "EnlTypeCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1700)*6.826;
            })
        .attr("cy", TypeCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir, .EleTypeCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
            
        if(i == 0) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return enlightenmenttype[0][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return enlightenmenttype[0][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return enlightenmenttype[0][1];
           });
       }
        else if(i == 1) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return enlightenmenttype[1][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return enlightenmenttype[1][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return enlightenmenttype[1][1];
           });
       }
        else if(i == 2) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return enlightenmenttype[2][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return enlightenmenttype[2][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return enlightenmenttype[2][1];
           });
       }
        else if(i == 3) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return enlightenmenttype[3][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return enlightenmenttype[3][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return enlightenmenttype[3][1];
           });
       }
        else if(i == 4) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return enlightenmenttype[4][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return enlightenmenttype[4][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return enlightenmenttype[4][1];
           });
       }
        else if(i == 5) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return enlightenmenttype[5][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return enlightenmenttype[5][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return enlightenmenttype[5][1];
           });
       }
        else if(i == 6) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return enlightenmenttype[6][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return enlightenmenttype[6][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return enlightenmenttype[6][1];
           });
       }
        else if(i == 7) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return enlightenmenttype[7][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return enlightenmenttype[7][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return enlightenmenttype[7][1];
           });
       }

    });

//Industrial Revolution Tech
     d3.select('#svg')
        .selectAll("IndTechCir") 
        .data(industrialtech) 
        .enter() 
        .append("circle") 
        .attr("class", "IndTechCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1850)*20.48;
            })
        .attr("cy", TechCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .IndTechCir, .EarTechCir, .EleTechCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
        
        if(i == 0) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return industrialtech[0][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return industrialtech[0][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return industrialtech[0][1];
            });
       }
        else if(i == 1) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return industrialtech[1][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return industrialtech[1][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return industrialtech[1][1];
           });
       }
        else if(i == 2) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return industrialtech[2][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return industrialtech[2][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return industrialtech[2][1];
           });
       }
        else if(i == 3) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return industrialtech[3][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return industrialtech[3][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return industrialtech[3][1];
           });
       }

    });
//Industrial Revolution Type
    
//Early Tech
    d3.select('#svg')
        .selectAll("EarTechCir") 
        .data(earlytech) 
        .enter() 
        .append("circle") 
        .attr("class", "EarTechCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1900)*11.378;
            })
        .attr("cy", TechCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .IndTechCir, .EarTechCir, .EleTechCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
        
        if(i == 0) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[0][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[0][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[0][1];
            });
       }
        else if(i == 1) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[1][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[1][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[1][1];
           });
       }
        else if(i == 2) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[2][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[2][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[2][1];
           });
       }
        else if(i == 3) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[3][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[3][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[3][1];
           });
       }
        else if(i == 4) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[4][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[4][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[4][1];
           });
       }
        else if(i == 5) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[5][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[5][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[5][1];
           });
       }
        else if(i == 6) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[6][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[6][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[6][1];
           });
       }
        else if(i == 7) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[7][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[7][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[7][1];
           });
       }
        else if(i == 8) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[8][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[8][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[8][1];
           });
       }
        else if(i == 9) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[9][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[9][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[9][1];
           });
       }
        else if(i == 10) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return earlytech[10][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return earlytech[10][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return earlytech[10][1];
           });
       }

    });
    
//EarlyType
        d3.select('#svg')
        .selectAll("EarTypeCir") 
        .data(earlytype) 
        .enter() 
        .append("circle") 
        .attr("class", "EarTypeCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1900)*11.378;
            })
        .attr("cy", TypeCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir, .EleTypeCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
            
        if(i == 0) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return earlytype[0][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return earlytype[0][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return earlytype[0][1];
           });
       }
        else if(i == 1) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return earlytype[1][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return earlytype[1][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return earlytype[1][1];
           });
       }
        else if(i == 2) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return earlytype[2][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return earlytype[2][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return earlytype[2][1];
           });
       }
        else if(i == 3) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return earlytype[3][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return earlytype[3][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return earlytype[3][1];
           });
       }
        else if(i == 4) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return earlytype[4][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return earlytype[4][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return earlytype[4][1];
           });
       }

    });
    
//Elecronic Tech
    d3.select('#svg')
        .selectAll("EleTechCir") 
        .data(electronictech) 
        .enter() 
        .append("circle") 
        .attr("class", "EleTechCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1990)*48.762;
            })
        .attr("cy", TechCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .IndTechCir, .EarTechCir, .EleTechCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
        
        if(i == 0) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[0][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[0][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[0][1];
            });
       }
        else if(i == 1) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[1][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[1][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[1][1];
           });
       }
        else if(i == 2) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[2][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[2][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[2][1];
           });
       }
        else if(i == 3) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[3][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[3][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[3][1];
           });
       }
        else if(i == 4) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[4][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[4][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[4][1];
           });
       }
        else if(i == 5) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[5][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[5][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[5][1];
           });
       }
        else if(i == 6) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[6][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[6][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[6][1];
           });
       }
        else if(i == 7) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[7][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[7][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[7][1];
           });
       }
        else if(i == 8) {
            d3.select('#TechText')
            .text(function(d,i) {
                 return electronictech[8][4];
                });
            d3.select('#TechTitle')
           .text(function(d,i) {
                 return electronictech[8][0];
            });
            d3.select('#TechYear')
           .text(function(d,i) {
                 return electronictech[8][1];
           });
       }

    });
    
    
//ElectronicType    
    d3.select('#svg')
        .selectAll("EleTypeCir") 
        .data(electronictype) 
        .enter() 
        .append("circle") 
        .attr("class", "EleTypeCir")
        .attr("id", function(d,i) { 
            return d[0];  
            })
        .attr("cx", function(d, i) {
            return (d[1]-1990)*48.762;
            })
        .attr("cy", TypeCirY)
        .attr("r", 15)
        .style('fill', function(d,i) {return d[3]})
    .on('click', function (d,i) {
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir, .EleTypeCir')
        .style('fill', function(d,i) 
               {return d[3]});
        d3.select(this)
        .style('fill', 'black');
        
        if(i == 0) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[0][4];
                });
            d3.select('#TypeTitle')
           .text(function(d,i) {
                 return electronictype[0][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[0][1];
            });
       }
        else if(i == 1) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[1][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[1][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[1][1];
            });
       }
        else if(i == 2) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[2][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[2][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[2][1];
            });
       }
        else if(i == 3) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[3][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[3][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[3][1];
            });
       }
        else if(i == 4) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[4][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[4][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[4][1];
            });
       }
        else if(i == 5) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[5][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[5][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[5][1];
            });
       }
        else if(i == 6) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[6][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[6][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[6][1];
            });
       }
        else if(i == 7) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[7][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[7][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[7][1];
            });
       }
        else if(i == 8) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[8][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[8][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[8][1];
            });
       }
        else if(i == 9) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[9][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[9][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[9][1];
            });
       }
        else if(i == 10) {
            d3.select('#TypeText')
            .text(function(d,i) {
                 return electronictype[10][4];
                });
            d3.select('#TypeTitle')
            .text(function(d,i) {
                 return electronictype[10][0];
            });
            d3.select('#TypeYear')
           .text(function(d,i) {
                 return electronictype[10][1];
            });
       }

    });

    
}
/* TIMELINE FUNCTIONS*/
/* TIMELINE FUNCTIONS*/
/* TIMELINE FUNCTIONS*/
/* TIMELINE FUNCTIONS*/

var MTLheightSmall = 20




function drawTLMedieval () {
    d3.select('#svg')
    .append('rect')
    .attr('id', "TLMidieval")
    .attr('x', 0)
    .attr('y', 430)
    .attr('height', MTLheightSmall)
    .attr('width', 464)
    .style('fill', medTLcolor)
    .on('click', function() {  
        d3.selectAll('#TypeText, #TypeTitle, #TypeYear, #TechText, #TechTitle, #TechYear')
            .text("");
        
        d3.selectAll('.MedTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 25)")
        .style("opacity", 1);
        
        d3.selectAll('.MedTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, -25)")
        .style("opacity", 1);
        
        /*Reset TYPE circles*/  
        d3.selectAll('.RenTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir, .EleTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 0)")
        .style("opacity", 1);
        
        /*Reset TECH circles*/  
        d3.selectAll('.RenTechCir, .EnlTechCir, .IndTechCir, .EarTechCir, .EleTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 25)")
        .style("opacity", 1);
        
        d3.select('#EraTitle')
        .transition()
        .duration(500)
        .text('Medieval Ages');
        
        d3.select('#EraYear')
        .transition()
        .duration(500)
        .text('1100-1500');
        
        d3.select('#TLMidieval')
        .transition()
        .duration(500)
        .style('fill', maincolor);
        
        d3.select('#TLRenaissance')
        .transition()
        .duration(500)
        .style('fill', renTLcolor);
        
        d3.select('#TLEnlight')
        .transition()
        .duration(500)
        .style('fill', enlTLcolor);
        
        d3.select('#TLIndRev')
        .transition()
        .duration(500)
        .style('fill', indTLcolor);
        
        d3.select('#TLEarly20th')
        .transition()
        .duration(500)
        .style('fill', earTLcolor);
    
        d3.select('#TLElectronic')
        .transition()
        .duration(500)
        .style('fill', eleTLcolor);
                })       

}


function drawTLRenaissance () {
    d3.select('#svg')
    .append('rect')
    .attr('id', "TLRenaissance")
    .attr('x', 464)
    .attr('y', 430)
    .attr('height', MTLheightSmall)
    .attr('width', 224)
    .style('fill', renTLcolor)
    .on('click', function() {
        d3.selectAll('#TypeText, #TypeTitle, #TypeYear, #TechText, #TechTitle, #TechYear')
            .text("");
          
        d3.selectAll('.RenTypeCir')
        .transition()
        .duration(500)
        .attr('transform', function(d, i) {
            return "translate(0," + d[2] + ")";
                })
        .style("opacity", 1);
        
        d3.selectAll('.RenTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, -25)")
        .style("opacity", 1);
        
        /*Reset TYPE circles*/  
        d3.selectAll('.MedTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir, .EleTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 0)")
        .style("opacity", 1);
        
        /*Reset TECH circles*/  
        d3.selectAll('.MedTechCir, .EnlTechCir, .IndTechCir, .EarTechCir, .EleTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 25)")
        .style("opacity", 1);
        
        d3.select('#EraTitle')
        .transition()
        .duration(500)
        .text('Renaissance');
        
        d3.select('#EraYear')
        .transition()
        .duration(500)
        .text('1500-1700');
        
        d3.select('#TLMidieval')
        .transition()
        .duration(500)
        .style('fill', medTLcolor);
        
        d3.select('#TLRenaissance')
        .transition()
        .duration(500)
        .style('fill', maincolor);
        
        d3.select('#TLEnlight')
        .transition()
        .duration(500)
        .style('fill', enlTLcolor);
        
        d3.select('#TLIndRev')
        .transition()
        .duration(500)
        .style('fill', indTLcolor);
        
        d3.select('#TLEarly20th')
        .transition()
        .duration(500)
        .style('fill', earTLcolor);
    
        d3.select('#TLElectronic')
        .transition()
        .duration(500)
        .style('fill', eleTLcolor);
    })
    
}

function drawTLEnlight () {
    d3.select('#svg')
    .append('rect')
    .attr('id', "TLEnlight")
    .attr('x', 688)
    .attr('y', 430)
    .attr('height', MTLheightSmall)
    .attr('width', 168)
    .style('fill', enlTLcolor)
    .on('click', function() {  
         d3.selectAll('#TypeText, #TypeTitle, #TypeYear, #TechText, #TechTitle, #TechYear')
         .text("");
          
        d3.selectAll('.EnlTypeCir')
        .transition()
        .duration(500)
        .attr('transform', function(d, i) {
            return "translate(0," + d[2] + ")";
                })
        .style("opacity", 1);
        /*
         d3.selectAll('.EnlTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 25)")
        .style("opacity", 1);
        */
        d3.selectAll('.EnlTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, -100)")
        .style("opacity", 1);
        
        /*Reset TYPE circles*/  
        d3.selectAll('.MedTypeCir, .RenTypeCir, .IndTypeCir, .EarTypeCir, .EleTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 0)")
        .style("opacity", 1);
        
        /*Reset TECH circles*/  
        d3.selectAll('.MedTechCir, .RenTechCir, .IndTechCir, .EarTechCir, .EleTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 25)")
        .style("opacity", 1);
        
        d3.select('#EraTitle')
        .transition()
        .duration(500)
        .text('Enlightenment');
        
        d3.select('#EraYear')
        .transition()
        .duration(500)
        .text('1700-1850');
        
        d3.select('#TLMidieval')
        .transition()
        .duration(500)
        .style('fill', medTLcolor);
        
        d3.select('#TLRenaissance')
        .transition()
        .duration(500)
        .style('fill', renTLcolor);
        
        d3.select('#TLEnlight')
        .transition()
        .duration(500)
        .style('fill', maincolor);
        
        d3.select('#TLIndRev')
        .transition()
        .duration(500)
        .style('fill', indTLcolor);
        
        d3.select('#TLEarly20th')
        .transition()
        .duration(500)
        .style('fill', earTLcolor);
    
        d3.select('#TLElectronic')
        .transition()
        .duration(500)
        .style('fill', eleTLcolor);
    })
    
}

function drawTLIndRev () {
    d3.select('#svg')
    .append('rect')
    .attr('id', "TLIndRev")
    .attr('x', 856)
    .attr('y', 430)
    .attr('height', MTLheightSmall)
    .attr('width', 56)
    .style('fill', indTLcolor)
    .on('click', function() {  
         d3.selectAll('#TypeText, #TypeTitle, #TypeYear, #TechText, #TechTitle, #TechYear')
         .text("");
        
         d3.selectAll('.IndTypeCir')
        .transition()
        .duration(500)
        .attr('transform', function(d, i) {
            return "translate(0," + d[2] + ")";
                })
        .style("opacity", 1);
        
        d3.selectAll('.IndTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, -25)")
        .style("opacity", 1);
        
        /*Reset TYPE circles*/  
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .EarTypeCir, .EleTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 0)")
        .style("opacity", 1);
        
        /*Reset TECH circles*/  
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .EarTechCir, .EleTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 25)")
        .style("opacity", 1);
        
        d3.select('#EraTitle')
        .transition()
        .duration(500)
        .text('Industrial Revolution');
        
        d3.select('#EraYear')
        .transition()
        .duration(500)
        .text('1850-1900');
        
        d3.select('#TLMidieval')
        .transition()
        .duration(500)
        .style('fill', medTLcolor);
        
        d3.select('#TLRenaissance')
        .transition()
        .duration(500)
        .style('fill', renTLcolor);
        
        d3.select('#TLEnlight')
        .transition()
        .duration(500)
        .style('fill', enlTLcolor);
        
        d3.select('#TLIndRev')
        .transition()
        .duration(500)
        .style('fill', maincolor);
        
        d3.select('#TLEarly20th')
        .transition()
        .duration(500)
        .style('fill', earTLcolor);
    
        d3.select('#TLElectronic')
        .transition()
        .duration(500)
        .style('fill', eleTLcolor);
    })
    
}

function drawTLEarly20th () {
    d3.select('#svg')
    .append('rect')
    .attr('id', "TLEarly20th")
    .attr('x', 912)
    .attr('y', 430)
    .attr('height', MTLheightSmall)
    .attr('width', 102)
    .style('fill', earTLcolor)
    .on('click', function() {   
         d3.selectAll('#TypeText, #TypeTitle, #TypeYear, #TechText, #TechTitle, #TechYear')
         .text("");
        
         d3.selectAll('.EarTypeCir')
        .transition()
        .duration(500)
        .attr('transform', function(d, i) {
            return "translate(0," + d[2] + ")";
                })
        .style("opacity", 1);
        
        d3.selectAll('.EarTechCir')
        .transition()
        .duration(500)
        .attr('transform', function(d, i) {
            return "translate(0," + d[2] + ")";
                })
        .style("opacity", 1);
        
        /*Reset TYPE circles*/  
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .IndTypeCir, .EleTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 0)")
        .style("opacity", 1);
        
        /*Reset TECH circles*/  
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .IndTechCir, .EleTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 25)")
        .style("opacity", 1);
        
        d3.select('#EraTitle')
        .transition()
        .duration(500)
        .text('Early 20th Century');
        
        d3.select('#EraYear')
        .transition()
        .duration(500)
        .text('1900-1990');
        
        d3.select('#TLMidieval')
        .transition()
        .duration(500)
        .style('fill', medTLcolor);
        
        d3.select('#TLRenaissance')
        .transition()
        .duration(500)
        .style('fill', renTLcolor);
        
        d3.select('#TLEnlight')
        .transition()
        .duration(500)
        .style('fill', enlTLcolor);
        
        d3.select('#TLIndRev')
        .transition()
        .duration(500)
        .style('fill', indTLcolor);
        
        d3.select('#TLEarly20th')
        .transition()
        .duration(500)
        .style('fill', maincolor);
    
        d3.select('#TLElectronic')
        .transition()
        .duration(500)
        .style('fill', eleTLcolor);
        
    })
    
}


function drawTLElectronic () {
    d3.select('#svg')
    .append('rect')
    .attr('id', "TLElectronic")
    .attr('x', 1014)
    .attr('y', 430)
    .attr('height', MTLheightSmall)
    .attr('width', 10)
    .style('fill', eleTLcolor)
    .on('click', function() {   
         d3.selectAll('#TypeText, #TypeTitle, #TypeYear, #TechText, #TechTitle, #TechYear')
         .text("");
        
         d3.selectAll('.EleTypeCir')
        .transition()
        .duration(500)
        .attr('transform', function(d, i) {
            return "translate(0," + d[2] + ")";
                })
        .style("opacity", 1);
        
        d3.selectAll('.EleTechCir')
        .transition()
        .duration(500)
        .attr('transform', function(d, i) {
            return "translate(0," + d[2] + ")";
                })
        .style("opacity", 1);
        
        /*Reset TYPE circles*/  
        d3.selectAll('.MedTypeCir, .RenTypeCir, .EnlTypeCir, .IndTypeCir, .EarTypeCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 0)")
        .style("opacity", 1);
        
        /*Reset TECH circles*/  
        d3.selectAll('.MedTechCir, .RenTechCir, .EnlTechCir, .IndTechCir, .EarTechCir')
        .transition()
        .duration(500)
        .attr("transform", "translate(0, 25)")
        .style("opacity", 1);
         
        d3.select('#EraTitle')
        .transition()
        .duration(500)
        .text('Electronic Age');
        
        d3.select('#EraYear')
        .transition()
        .duration(500)
        .text('1900-2011');
        
        d3.select('#TLMidieval')
        .transition()
        .duration(500)
        .style('fill', medTLcolor);
        
        d3.select('#TLRenaissance')
        .transition()
        .duration(500)
        .style('fill', renTLcolor);
        
        d3.select('#TLEnlight')
        .transition()
        .duration(500)
        .style('fill', enlTLcolor);
        
        d3.select('#TLIndRev')
        .transition()
        .duration(500)
        .style('fill', indTLcolor);
        
        d3.select('#TLEarly20th')
        .transition()
        .duration(500)
        .style('fill', earTLcolor);
    
        d3.select('#TLElectronic')
        .transition()
        .duration(500)
        .style('fill', maincolor);
    })
    
}


window.onload = function() {
    drawTechTitle();
    drawTechYear();
    drawTechText();

    drawTypeTitle();
    drawTypeYear();
    drawTypeText();
    
    drawCircles();
    drawMainTL();
    drawTLtitle();
    drawTLyear();
    
    
    drawTLMedieval();
    drawTLRenaissance();
    drawTLEnlight();
    drawTLIndRev();
    drawTLEarly20th();
    drawTLElectronic();
    
    drawMainTitle();
    reset();

}