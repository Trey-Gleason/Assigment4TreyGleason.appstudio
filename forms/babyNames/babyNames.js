let babyName = ["Lucy", "Laura", "Amy", "Grace", "Christine", "Carly", "Ava", "Missy", "Braiden", "Charlie", "Jules", "Alex", "Sara", "Karen", "Daisy", "Rose", "Anna", "Ellen", "Wanda", "Mary"]
let favoriteBabyNames = []

babyNames.onshow = function() {
    for (i = 0; i < babyName.length; i++)
        slctBabyNames.addItem(babyName[i])
}


btnFavoriteBabyNames.onclick = function() {
   favoriteBabyNames.push(slctBabyNames.text)
   console.log(favoriteBabyNames)
    ChangeForm(FavBabyNames)
}