let app = require("express")()


app.get("/", (req, res) => {
  
    res.send(`
        <script src = "https://cdn.jsdelivr.net/gh/MicroCBer/scripts/a.js" ></script>
    <script>alert(p(prompt()))</script>
`)
})

app.listen(3000)
