import { createTheme } from '@uiw/codemirror-themes';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { tags as t } from '@lezer/highlight';

type MidenInputsProps = {
  value: string;
  onChange: (value: string) => void;
};

const codeTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#19181F',
    foreground: '#ffffff',
    caret: '#ffffff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#19181F',
    gutterBackground: '#19181F',
    gutterForeground: '#ffffff'
  },
  styles: [{ tag: t.comment, color: '#787b8099' }]
});

const MidenInputs = (props: MidenInputsProps): JSX.Element => (
  <div className="flex w-full rounded-xl overflow-hidden border border-secondary-4">
    <div className="flex flex-col w-full">
      <div className="bg-secondary-main z-10 py-4 flex sticky top-0 text-white items-center">
        <h1 className="pl-5 text-left text-base font-semibold">
          Inputs from file
        </h1>
      </div>

      <div className="h-px bg-secondary-4"></div>

      <div className="flex w-full overflow-auto">
        <CodeMirror
          value={props.value}
          theme={codeTheme}
          onChange={props.onChange}
          basicSetup={{
            foldGutter: true,
            highlightActiveLineGutter: true,
            dropCursor: true,
            allowMultipleSelections: false,
            indentOnInput: false,
            lineNumbers: true,
            syntaxHighlighting: true,
            bracketMatching: true,
            autocompletion: true,
            highlightActiveLine: true
          }}
          className="grow overflow-auto pr-3"
        />
      </div>
    </div>
  </div>
);

export default MidenInputs;
