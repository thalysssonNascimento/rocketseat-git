import React from 'react';

import { FaGitAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
    return (
        <Container>
            <h1>
                <FaGitAlt />
                Repositório
            </h1>

            <Form onSubmit={() => {}}>
                <input
                    type="text"
                    placeholder="Adicionar repositório"
                    name=""
                    id=""
                />
                <SubmitButton>
                    <FaPlus color="#fff" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
}
