import { Header } from '@components/Header';
import { Container, Title } from './styles';
import { Highlight } from '@components/Highlight';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
    const [groups, setGroups] = useState<string[]>(["Galera da facul", "Galera da levva"])
    return (
        <Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="jogue com a sua turma"
            />
            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <GroupCard title={item} />
                )}
            />
        </Container>
    );
}