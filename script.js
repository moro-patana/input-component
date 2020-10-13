import React from 'react';
import ReactDOM from 'react-dom';
import Input from "./inputs.js"

function App() {
    return (
        <main>
            <h1>Inputs</h1>
                {`<Input />`}
            <fieldset>
                <label>Label</label>
                <Input type="text" placeholder="Placeholder" />
            </fieldset>
            {`<Input error />`}
            <fieldset>
                <label className="error">Label</label>
                <Input type="text" placeholder="Placeholder" error="error" />
            </fieldset>
            {`<Input disabled />`}
            <fieldset>
                <label>Label</label>
                <Input type="text" disabled placeholder="Placeholder" />
            </fieldset>
            {`<Input helperText="some interesting text" />`}
            <fieldset>
                <label>Label</label>
                <Input type="text" helperText="some interesting text" placeholder="Placeholder" />
                Some interesting text
            </fieldset>



        </main>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
