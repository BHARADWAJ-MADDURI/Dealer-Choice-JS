const express = require('express');
const app = express();
const morgan = require("morgan");
const statesData = require("./statesData");
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 1338;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
app.use(morgan('dev'));


app.get('/', (req, res) => {
    const states = statesData.list();

    const html = `<!DOCTYPE html>
    <html>
        <Head>
            <title>States in the US</title>
            <link rel='stylesheet' href='/styles.css' />
        </Head>
        <body>
            <h1>States of the United States of America</h1>
            <div class='state-list'>
                ${states.map(
                    (state) => 
                    `<div class='state-item'>
                        <p>
                            <a href='/states/${state.id}'>
                                <span class='state-position'>${state.id}.</span>${state.stateName}
                        </p>
                    </div>` ).join("")
                    }
            </div>
        </body>
    </html>`;

    res.send(html);

}); 

app.get('/states/:id', (req, res) => {
    const id = req.params.id;
    const state = statesData.find(id);
    const states = [state];

    const html = `<!DOCTYPE html>
    <html>
        <Head>
            <title>States in the US</title>
            <link rel='stylesheet' href='/styles.css' />
        </Head>
        <body>
            <div class='state-info'>
                ${states.map(
                    (state) => 
                    `<div class='state-info-item'>
                        <p>
                            <h1>${state.stateName} State Facts</h1>
                                <table class='tableInfo'>
                                    <tr>
                                        <th>Capital City</th>
                                        <td>${state.capitalCity}</td>
                                    </tr>
                                    <tr>
                                        <th>Postal Code</th>
                                        <td>${state.postalCode}</td>
                                    </tr>
                                    <tr>
                                        <th>Time zone</th>
                                        <td>${state.timeZone}</td>
                                    </tr>
                        </p>
                    </div>` ).join("")
                    }
            </div>
        </body>
    </html>`;

    res.send(html);

}); 
