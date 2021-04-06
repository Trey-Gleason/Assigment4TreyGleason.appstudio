 FavBabyNames.onshow=function(){
  drpFavoriteNames.clear()
  console.log(favoriteBabyNames)
  for (i = 0; i < 5; i++)
      drpFavoriteNames.addItem(favoriteBabyNames[0][i])
      imgBaby.hidden = true
}

drpFavoriteNames.onclick = function(s) {
    if (typeof(s) == "object") {
    return
} else {
    lblFavoriteName.value = `Your favorite name is ${s}!`
    imgBaby.hidden = false
    }
}