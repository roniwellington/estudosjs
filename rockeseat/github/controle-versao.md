Controle de Versão

Registro de alterações em um ou mais arquivos
Lembrar versões específicas mais tarde
Revertre para estado anterior determinados arquivos ou um projeto inteiro
Compare as mudanças ao longo do tempo
Veja quem modificou pea última vez algo que pode estar causando um problema
Quem introduziu um problema ou quando
Se você estragar tudo oi poerder arquivos, você pode facilmente recuperar
E muito mais

TIPOS DE CONTROLE DE VERSÃO

SISTEMA LOCAIS

Copiar os arquivos para outro diretório
Muito comum e muito simples
Incrivelmente propensa a erros
Fácil de sobrescrever arquivos, caso haja feito uma cópia errada

Para superar os possíveis erros, exite o RCS - Revision Control System

Ferramenta popular (antigamente) para controle de versão

Mantem conjuntos de alterações, ou seja, as diferenças entre os arquivos
Formato especial no disco
Re-criar como qualquer arquivo se parecia em qualquer ponto no tempo, adicionando-se todas as alterações ao arquivo.



E se você precisar colaborar com desenvolvedores em outros sistemas?
 Sistemas Centralizados
 exemplos: cvs, Subversion e Perforce

 Um único servidor que contém todos os arquivos de controle de versão
 Vários clientes usam arquivos a partir desse lugar central.

 Por muitos anos, este tem sido o padrão para controle de versão

 Vantagens sobre VCSs locais

 Controle sobre atividades dos colaboradores no projeto
 Os administradores têm controle refinado sobre quem pode fazer o que;
 Mais fácil de administrar um CVCS do que lidar com banco de dados locais em cada cliente

 Desvantagens
 Se esse  servidor der problemas por uma hora, durante essa hora ninguém pode colaborar ou salvar as alterações de versão para o que quer que eles estejam trabalhando.(Já passei por isso)
 Se o disco rígido do banco de dados central for corrompido, você perde absolutamente tudo
 Sistemas VCS locais sofrem com esse mesmo problema

 ||Sempre que você tenha toda a história do projeto em um único lugar, há o risco de perder tudo.


 SISTEMAS DISTRIBUÍDOS 
 ex.Git,Mercurial, Bazaar ou Darcs

 Duplicar(clonar)localmente o repositório completo.
 Se qualquer servidor morrer, e esses sistemas estiverem colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor

 Cada clone é de fato um backup completo de todos os dados.
 Cliente usam o estado mais recentes dos arquivos

 O que é Git?

 Sistema de controle de versão distribuido
 Open-source
 Pontos na história:commit(viajem no tempo)
    Histórico de alterações no código
    Voltar para qualquer ponto na história
Controlar o fluxo de novas funcionalidades
    ramificações: branch(universos paralelos)
    Vários devs no mesmo projeto
    Análise e resolução de conflitos