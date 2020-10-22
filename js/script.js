function stopSliding(slider){
    var sliderCurrent = document.getElementById("slider1");
    var sliderBelow = document.getElementById("slider2");
    var left = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("left"));
    var right = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("right"));
        
    sliderCurrent.remove("animate");
    sliderCurrent.style.left = left;

    var rightBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("right"));
    var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));

    console.log('RightBelow é '+rightBelow)
    var total = leftBelow + 100;
    console.log('LeftBelow é '+total)
    console.log('Right é '+right)
    console.log('Left é '+left)

    if((left >= (leftBelow+100-5)) && (right >= rightBelow-5)){
        document.getElementById("image_fig").src = "img/Seq_Acertou.gif"
    }else{
        document.getElementById("image_fig").src = "img/Bater_fig_errou.png"
    }
    
}