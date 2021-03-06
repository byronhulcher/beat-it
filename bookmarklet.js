$ = jQuery
$('.descender').removeClass('descender')
$('figure').remove()
$('blockquote p:first-of-type').unwrap()
$('p').each(function(){$(this).text($(this).text().toLowerCase())})
$('p').each(function(){$(this).html($(this).html().replace(/\.(?=\s[a-zA-Z]{3})/g,"<p>"))})
$('p').each(function(){$(this).html($(this).html().replace(/[,-;:]/g,""))})
$('p').each(function(){$(this).html($(this).html().replace(/['"“”‘’]+/g, ''))}) // when converting to bookmarklet the smart quotes become %E2%80%9C%E2%80%9D%E2%80%98%E2%80%99
$('p').each(function(){$(this).html($(this).html().replace(/[—-]+/g, ''))}) // when converting to bookmarklet the emdash becomes %E2%80%94

$('.articleBody>p').css({'margin-left':'2em','margin-bottom':'0','text-indent':'-2em'})
$('.articleBody>p:nth-child(4n+4)').css({'margin-bottom':'2em'})