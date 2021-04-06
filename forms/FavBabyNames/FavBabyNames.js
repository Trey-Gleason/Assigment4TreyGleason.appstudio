 FavBabyNames.onshow=function(){
  drpFavoriteNames.clear()
  console.log(favoriteBabyNames)
  for (i = 0; i < babyNames.length -1 ; i++)
      drpFavoriteNames.addItem(favoriteBabyNames[0][i])
      imgBaby.hidden = true
}

drpFavoriteNames.onclick = function(s) {
    if (typeof(s) == "object") {
    return
  } else {
    drpFavoriteNames.value = s
    lblFavoriteName.value = `Your favorite name is ${drpFavoriteNames}!`
    imgBaby.hidden = false
    }
}