$(document).ready(function(){
    $('#note2000').keyup(function(){
        var mul1 =$('.span2000').html();
        var mul2 =$('#note2000').val();
        var totalmul = mul1 * mul2 ;
        // console.log(totalmul);
        $('#total2000').val(totalmul).html(totalmul);
    });
    $('#note500').keyup(function(){
        var mul1 =$('.span500').html();
        var mul2 =$('#note500').val();
        var totalmul = mul1 * mul2 ;
        $('#total500').val(totalmul).html(totalmul);
    });
    $('#note200').keyup(function(){
        var mul1 =$('.span200').html();
        var mul2 =$('#note200').val();
        var totalmul = mul1 * mul2 ;
        $('#total200').val(totalmul).html(totalmul);
    });
    $('#note100').keyup(function(){
        var mul1 =$('.span100').html();
        var mul2 =$('#note100').val();
        var totalmul = mul1 * mul2 ;
        $('#total100').val(totalmul).html(totalmul);
    });
    $('#note50').keyup(function(){
        var mul1 =$('.span50').html();
        var mul2 =$('#note50').val();
        var totalmul = mul1 * mul2 ;
        $('#total50').val(totalmul).html(totalmul);
    });
    $('#note20').keyup(function(){
        var mul1 =$('.span20').html();
        var mul2 =$('#note20').val();
        var totalmul = mul1 * mul2 ;
        $('#total20').val(totalmul).html(totalmul);
    });
    $('#note10').keyup(function(){
        var mul1 =$('.span10').html();
        var mul2 =$('#note10').val();
        var totalmul = mul1 * mul2 ;
        $('#total10').val(totalmul).html(totalmul);
    });
    $('#note5').keyup(function(){
        var mul1 =$('.span5').html();
        var mul2 =$('#note5').val();
        var totalmul = mul1 * mul2 ;
        $('#total5').val(totalmul).html(totalmul);
    });
    $('#note2').keyup(function(){
        var mul1 =$('.span2').html();
        var mul2 =$('#note2').val();
        var totalmul = mul1 * mul2 ;
        $('#total2').val(totalmul).html(totalmul);
    });
    $('#note1').keyup(function(){
        var mul1 =$('.span1').html();
        var mul2 =$('#note1').val();
        var totalmul = mul1 * mul2 ;
        $('#total1').val(totalmul).html(totalmul);
    });
    $('.form-control').keyup(function(){
        var mul1 =$('#total2000').val();
        var mul2 =$('#total500').val();
        var mul3 =$('#total200').val();
        var mul4 =$('#total100').val();
        var mul5 =$('#total50').val();
        var mul6 =$('#total20').val();
        var mul7 =$('#total10').val();
        var mul8 =$('#total5').val();
        var mul9 =$('#total2').val();
        var mul10 =$('#total1').val();
        var totalsum = +mul1 + +mul2 + +mul3 + +mul4 + +mul5 + +mul6 + +mul7 + +mul8 + +mul9 + +mul10;
        // console.log(totalmul);
        $('#totalcount').val(totalsum);
    });
    $('.form-control').keyup(function(){
        var mul1 =$('#note2000').val();
        var mul2 =$('#note500').val();
        var mul3 =$('#note200').val();
        var mul4 =$('#note100').val();
        var mul5 =$('#note50').val();
        var mul6 =$('#note20').val();
        var mul7 =$('#note10').val();
        var mul8 =$('#note5').val();
        var mul9 =$('#note2').val();
        var mul10 =$('#note1').val();
        var totalsum = +mul1 + +mul2 + +mul3 + +mul4 + +mul5 + +mul6 + +mul7 + +mul8 + +mul9 + +mul10;
        $('#totalnotes').val(totalsum);
    });
    var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    $('.form-control').keyup(function () {
    inWords($('#totalcount').val());
});

    function inWords(num) {
        if ((num = num.toString()).length > 9) return 'overflow';
        n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return;
        var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        $('#wordrupee').text(str)
    }
});