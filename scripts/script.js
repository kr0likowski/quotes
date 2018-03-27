quoteIndex=0;
lastIndex=0;
quote = ["Religia, obowiązki rodzinne, konieczność zarabiania na życie, wszystkie rzeczy tego rodzaju. Człowiek się w tym dusi, nie wydaje się panu?","Tak to już jest, z każdą dziewczyną, którą udało mi się poznać, zawsze był jakiś blondyn, co gdzieś na nią czekał. Ale żebyś nawet nie myślał, że stałem się od tego człowiekiem zgorzkniałym. Trochę zrezygnowanym - może, ale nie zgorzkniałym.","Człowiek jest najgłębiej uzależniony od swojego odbicia w duszy drugiego człowieka.","Kordian przypomniał sobie jedną z wielu mądrości Piłsudskiego: balansujcie, dopóki się da, a gdy się już nie da, podpalajcie świat."];
author = ["~Gene Brewer <br/> KPAX","~Etgar Keret <br/> Kolonie Knellera", "~Witold Gombrowicz <br/> Ferdydurke","~Remigiusz Mróz <br/> Kasacja"];
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
function tweetCurrentPage(){
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=&text='+quote[quoteIndex],'share','width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function tumblrCurrentQuote(){
    openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent()+'&content=' + encodeURIComponent(quote[quoteIndex])+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
}
function changeColor(){
    colorIndex=Math.floor(Math.random() * colors.length);
    while (quoteIndex==lastIndex) {
        quoteIndex=Math.floor(Math.random() * quote.length);
    }
    lastIndex=quoteIndex;
    $('.quote-txt').animate({opacity:0},'slow',function(){
        $(this).html(quote[quoteIndex]);
        $(this).animate({opacity:1});
    });
    $('.author').animate({opacity:0},'slow',function(){
        $(this).html(author[quoteIndex]);
        $(this).animate({opacity:1});
    });

    $( "body").animate({
        backgroundColor: colors[colorIndex]
    }, 1000 );

    $('.new-quote').animate({opacity:0},'slow', function() {
        $(this).css("background-color",colors[colorIndex]);
        $(this).animate({opacity: 1});
    });
    $('.tw-box').animate({opacity:0},'slow', function() {
        $(this).css("background-color",colors[colorIndex]);
        $(this).animate({opacity: 1});
    });
    $('.quote-left').animate({opacity:0},'slow', function() {
        $(this).css("color",colors[colorIndex]);
        $(this).animate({opacity: 1});
    });
}
$(document).ready(function(){
    $(".new-quote").click(function(){
        changeColor();
    });
    $('.tw').click(function() {
        $('.tw').animate({opacity:0},'fast');
        tweetCurrentPage();
        $('.tw').animate({opacity:1});
    });
    $('.tmblr').click(function(){
        $('.tmblr').animate({opacity:0},'fast');
        tumblrCurrentQuote();
        $('.tmblr').animate({opacity:1});
    });
});

