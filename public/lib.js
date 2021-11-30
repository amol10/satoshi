
function add_spot_submit() {
    console.log("add_spot_submit called");
    var crypto  = jQuery('#spot-crypto').val();
    var fiat    = jQuery('#spot-fiat').val();
    var amount  = jQuery('#spot-amount').val();
    var price   = jQuery('#spot-price').val();
    var date    = jQuery('#spot-date').val();
    console.log("crypto: ", crypto);
    var url     = `/investment/add/${crypto}/${fiat}/${amount}/${price}/${date}/`;
    jQuery.get(url, (data, status) => {
        console.log(data);
    });
}
