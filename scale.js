// ?Задача: при выводе на печать реквизиты футера должны выводится полностью без обрезания и захватывать последний пункт договора (п 5.4)
// ?Задача: увеличивать размер шрифта текста и футера одинаково, сейчас отличается
// *Решение: подсчитывать количество строк в футере и если оно превышает определенное количество, которое не помещается на страницу целиком, вставлять свойство переноса или теги <br> перед последним пуктом договора 

$(document).ready(function () {
    var size = 9;
    $("#up").click(function () {
        if (size < 13) {
            size += 0.5;
            //var cells = $('td');
            //for (var i = 0; i < cells.length; i++) {
            //    cells[i].style.fontSize = size + "pt";
            //    $(cells[i]).find('*').each(function (index, elem) {
            //      elem.style.fontSize = size + "pt";
            //    });
            //}
            // jQuery("*").css('font-size', '+=0.5pt');
            jQuery("div:not(.hiddenWhenPrint) *").css('font-size', '+=0.5pt');
            //jQuery("div").css('font-size', '+=0.5pt');  
        }
    });

    $("#down").click(function () {
        if (size > 9) {
            size -= 0.5;
            //var cells = $('td');
            //for (var i = 0; i < cells.length; i++) {
            //    cells[i].style.fontSize = size + "pt";
            //    $(cells[i]).find('*').each(function(index, elem) {
            //      elem.style.fontSize = size + "pt";
            //    });
            //}
            jQuery("div:not(.hiddenWhenPrint) *").css('font-size', '-=0.5pt');



            // jQuery("div").css('font-size', '-=0.5pt');  
        }
    });
})