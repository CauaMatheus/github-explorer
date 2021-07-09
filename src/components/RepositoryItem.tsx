import { HTMLProps } from "react";

interface RepositoryItemProps {
  repository: {
    name: string,
    description?: string,
    html_url: string,
  }
}

export function RepositoryItem({repository}: HTMLProps<'li'> & RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description || 'Sem descrição'}</p>

        <a href={repository.html_url}>
          Acessar repositório
        </a>
    </li>
  );
}