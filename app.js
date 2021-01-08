let app = require("express")()


app.get("/", (req, res) => {
    res.send(`
        < script src = "https://cdn.jsdelivr.net/gh/MicroCBer/scripts/a.js" ></script >
    <script>alert(p(atob(prompt())))</script>
`)
})

app.listen(3000)
