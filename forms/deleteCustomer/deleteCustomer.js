/*
btnCurrentEmployee.onclick = function() {
  query = "SELECT name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=wfg15722&pass=" + pw + "&database=wfg15722&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`The results are: ${results}`)
    if (results.length == 0)
      lblMessage.value = "That customer does not exist."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        slctEmployee.addItem(results[i][1])
    }
  } else
    lblMessage.value = "Error code: " + req.status
}

btnDeleteEmployee.onclick = function() {
  delete = slctEmployee.text
  let found = false
  for (i = 0; i < results.length; i++) {
    if (delete == results[i][1]) {
      found = true
      break
    }
  }
  if (found == false)
    lblMessage.value = "That customer name is not in the database"
  else if (found == true) {
    query = "DELETE FROM customer WHERE name = '" + delete + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200)
      if (req.responseText == 500)
        lblMessage.value = `You have successfully deleted the customer named ${deleteUser}`
    else
      lblMessage.value = `There was a problem deleting ${deleteUser} from the database.`
    else
      lblMessage.value = `Error: ${req.status}`
  }
  slctEmployee.clear();
}
*/