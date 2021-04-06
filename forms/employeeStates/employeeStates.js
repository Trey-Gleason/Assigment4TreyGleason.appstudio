/*
let req = ""
let query = ""
let results = []
// this password is not real so it will not run
let pw = "password"
let userName = 'wfg15722'

var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

employeeStates.onshow = function() {
  drpState.clear()
  for (i = 0; i < state.length; i++)
    drpStates.addItem(states[i])
}

drpState.onclick = function(s) {
    if (typeof(s) == "object")
        return
    else {
        drpStates.value = s
    query = `SELECT name from customer WHERE state = '${s}'`
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=wfg15722&pass=" + pw + "&database=wfg15722&query=" + query)
    if (req.status == 200) {  
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblCustomer.value = "No customers are from this state."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
              message = message + results[i][1] + "\n"
              lblCustomer.value = results[i] + "\n"
               lgCustomers.addItem(results[i])
       }} }
}


btnChangeForm.onclick=function(){
  ChangeForm(deleteCustomer)
  }
  */