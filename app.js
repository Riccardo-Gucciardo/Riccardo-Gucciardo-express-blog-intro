const express = require("express");
const app = express()
const port= 3000

app.get("/",(req,res)=>{
    res.send('server del mio blog')
})

app.use(express.static('public'))

app.get("/bacheca",(req,res)=>{

        const menu= [

            {
            title: "ciambellone",
            content: `l ciambellone è un dolce profumato e soffice. Una torta da credenza semplice da realizzare, 
            ideale da gustare a colazione oppure a merenda `,
            image: "ciambellone.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    
           }, 
    
           {
    
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. 
            Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. 
            I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. 
            Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, 
            le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
                      Cracker di farro
                      Cracker di lupini
                      Cracker allo zafferano
                      Cracker ai semi`,
            image: "cracker_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    
            },
    
            {
    
            title: "pane fritto dolce",
            content: `Il pane fritto dolce è la versione più antica dell’odierno french toast! Una deliziosa ricetta antispreco che le nonne preparavano ai bambini per merenda, 
            utilizzando gli ingredienti che si avevano sempre a disposizione in casa: 
            pane raffermo, uova, latte e zucchero, che noi abbiamo deciso di aromatizzare con un pizzico di cannella. 
            Facile e veloce da realizzare`,
            image: "pane_fritto_dolce.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    
        },
    
            {
    
            title: "pasta barbabietola",
            content: `Stregati dalla tinta color amaranto della barbabietola e attirati dal suo gusto unico
            e dalle sue innumerevoli proprietà benefiche, l’abbiamo provata come gustoso colorante al naturale
            per insaporire diverse pietanze, dando vita così a un fragrante pane,
            una soffice torta, un cremoso risotto, sfiziose crocchette e dei morbidi gnocchi. 
            Qui vi proponiamo un’altra delizia saporita`,
            image: "pasta_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    
        },
    
            {
    
            title: "torta paesana",
    
            content: `La torta paesana è un dolce di origine lombarda e precisamente della Brianza, 
            la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. 
            E’ un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. 
            E’ infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte).`,  
            image: "torta_paesana.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    
            },
    
        ];
        res.json(menu)
})

app.listen(port,()=>{
    console.log(`example app listeninsg on port ${port}`);
    
})