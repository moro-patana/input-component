import React from "react"
import Input from "./inputs.js"

function App() {
    return (
        <div>
            <div className="field">
            {`<Input error/>`}
                <label>Label</label>
                <Input placeholder="Placeholder"/>
            </div>
            <div className="field">
                {`<Input error/>`}
                <label className="error">Label</label>
                <Input error placeholder="Placeholder"/>
            </div>
            <div className="field">
                {`<Input disabled/>`}
                <label>Label</label>
                <Input disabled placeholder="Placeholder"/>
            </div>
            <div className="inputError">
                <div className="field">
                    {`<Input helperText="Some interesting text/>"`}
                    <label>Label</label>
                    <Input helperText="Some interesting text/>" placeholder="Placeholder"/>
                    <p>Some interesting text</p>
                </div>
                <div className="field">
                    {`<Input helperText="Some interesting text/>"`}
                    <label className="error">Label</label>
                    <Input helperText="Some interesting text/>" placeholder="Placeholder" error/>
                    <p className="error">Some interesting text</p>
                </div>
            </div>
            <div className="icon">
                <div className="field">
                    {`<Input startIcon />`}
                    <label>Label</label>
                    <Input startIcon placeholder="Placeholder"/>
                </div>
                <div className="field">
                    {`<Input endIcon />`}
                    <label>Label</label>
                    <Input endIcon placeholder="Placeholder"/>
                </div>
            </div>
            <div className="field">
                {`<Input value="Text" />`}
                <label>Label</label>
                <Input value="Text"/>
            </div>
            <div className="inputsize">
                <div className="field">
                    {`<Input size="sm />`}
                    <label>Label</label>
                    <Input size="sm" placeholder="Placeholder"/>
                </div>
                <div className="field">
                    {`<Input size="md" />`}
                    <label>Label</label>
                    <Input size="md" placeholder="Placeholder"/>
                </div>
            </div>
            <div className="field">
                {`<Input fullwidth />`}
                <label>Label</label>
                <Input fullwidth placeholder="Placeholder"/>
            </div>
            <div className="field">
                {`<Input multiline row="4"/>`}
                <label>Label</label>
                <Input multiline row="4" placeholder="Placeholder"/>
            </div>

        </div>
    )
}
export default App;