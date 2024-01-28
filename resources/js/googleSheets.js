function setUpGoogleSheets() {
    //const scriptURL = 'https://script.google.com/macros/s/AKfycbx4F5_g5B5AaqgSbzvDmPyEKmD7ciPwCK3miz3mATeeumS0G5gnrWzwJ2ED5k3CYnJ6/exec'
    const scriptURL = 'https://script.google.com/macros/s/AKfycbymRPJStXYew-mUaSqCSbUss8xbR15oLrIhNeaL4gPTVtPcEYzXP3p2Gq5JqEeNT2mgrw/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData('post')

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, body: fd })
        .then(response => { 
              alert('Success: Data was sent to AppScript', response)})
        .catch(error => {
              alert('Error: Bad Connection.', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
