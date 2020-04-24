# A-simple-way-to-check-if-a-whatapp-contact-is-online
self explanatory name

// 1. go to web.whatsapp.com
// 2. open the chat of the person you want to check
// 3. press F12 or inspect element
// 4. press on console
// 5. paste following code:
last_title = document.getElementsByClassName("O90ur _3FXB1")[0].title;
while(true){
    await new Promise(r => setTimeout(r, 1000));
    if (document.getElementsByClassName("O90ur _3FXB1")[0].title != last_title){
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}
// 6. press Enter
// 7. stay on the same tab (you'll appear online!)
// 8. when the person logs, a song will start playing
// NOTE - check it out first on a friend's phone
