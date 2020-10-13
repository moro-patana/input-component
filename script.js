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
            <div className="textError">
                <fieldset>
                {`<Input helperText="some interesting text" />`}
                    <label>Label</label>
                    <Input type="text" helperText="some interesting text" placeholder="Placeholder" />
                    <p>
                        Some interesting text
                    </p>
                </fieldset>
                <fieldset>
                {`<Input helperText="some interesting text" error/>`}
                    <label className="error">Label</label>
                    <Input type="text" helperText="some interesting text" placeholder="Placeholder" error/>
                    <p className="error">
                        Some interesting text
                    </p>
                </fieldset>
            </div>
            {`<Input startIcon/>`}
            <fieldset>
                <label>Label</label>
                <Input type="text" startIcon placeholder="Placeholder" />
            </fieldset>
            {`<Input value="text" />`}
            <fieldset>
                <label>Label</label>
                <Input type="text" value="Text" />
            </fieldset>
            {`<Input size="sm" />`}
            <fieldset>
                <label>Label</label>
                <Input type="text" size="sm" startIcon placeholder="Placeholder" />
            </fieldset>
            {`<Input size="md" />`}
            <fieldset>
                <label>Label</label>
                <Input type="text" size="md" startIcon placeholder="Placeholder" />
            </fieldset>



        </main>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
