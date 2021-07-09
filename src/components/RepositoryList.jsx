import { RepositoryItem } from './RepositoryItem';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={{
          name: 'Repositório 1',
          description: 'Descrição',
          url: 'https://www.google.com'
        }}/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
      </ul>
    </section>
  )
}