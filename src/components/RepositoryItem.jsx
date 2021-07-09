export function RepositoryItem({repository}) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Default'}</p>

      <a href={repository?.url ?? 'https://github.com'}>
        Acessar repositório
      </a>
    </li>
  );
}