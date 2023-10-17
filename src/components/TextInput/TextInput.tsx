import { Container, Label, Input } from './styles';

type TextInputProps = {
    text: string;
    setText: (e: string) => void;
    name?: string;
    placeholder?: string;
    label?: string;
}

const TextInput = ({ text, setText, name, placeholder, label }: TextInputProps) => {

    return (
        <Container>
            <Label htmlFor="user">{label}</Label>
            <Input
            id="user"
            type="text"
            placeholder={placeholder}
            name={name}
            value={text}
            onChange={(e) => setText(e.target.value)}/>
        </Container>
    );
}

export default TextInput;