import type { MockupKind } from "@/components/offer/Mockups";

export type DeclineTarget = "/dw1" | "/u2" | "/dw2" | "/u3" | "/dw3";

export type Offer = {
  kind: MockupKind; title: string; price: string; headline: string; sub: string; intro: string;
  bullets: string[]; objection: { q: string; a: string }; cta: string; link: string; seal: string;
  decline: { text: string } & ({ to: DeclineTarget; href?: never } | { href: string; to?: never });
};
const S = "Acesso imediato • Oferta exclusiva desta tela";

export const offers: Record<MockupKind, Offer> = {
  u1: { kind: "u1", title: "Kit Documentação e Anamnese Clínica Descomplicada", price: "R$ 27,00 • pagamento único",
    headline: "Você acabou de resolver o planejamento das suas sessões. Agora resolva a burocracia que rouba seu fim de dia — em 1 clique.",
    sub: "Kit Documentação e Anamnese Clínica Descomplicada — 5 modelos editáveis por R$ 27,00. Oferta única, só nesta tela.",
    intro: "Enquanto você lê isso, algum relatório de hoje ainda está por escrever. Este kit entrega os 5 documentos que toda terapeuta infantil precisa, prontos para preencher e imprimir.",
    bullets: ["Contrato de prestação de serviço — proteja seu trabalho e evite mal-entendidos com pais", "Ficha de anamnese completa — a primeira conversa com os pais estruturada", "Modelo de evolução de prontuário — escreva a sessão em minutos", "Recibos prontos — profissionalismo na hora do pagamento", "Relatórios de alta — feche o caso com um documento que valoriza seu trabalho", "Editáveis (Google Docs/Canva) — personalize com seu nome e logo em 10 minutos"],
    objection: { q: "\u201cMas eu já tenho meus próprios modelos…\u201d", a: "Se fossem bons, você não passaria 1 hora por dia redigindo. Estes modelos foram pensados para terapeutas infantis, com a linguagem certa para pais e escolas. E por R$ 27 — menos do que você ganha em 20 minutos de sessão." },
    cta: "SIM, QUERO PARAR DE PERDER NOITES REDIGINDO", link: "https://pay.cakto.com.br/ztufvbj", seal: S,
    decline: { text: "Não, obrigado — continuar sem o kit de documentação", to: "/dw1" } },
  d1: { kind: "d1", title: "Pack de Anamnese Lúdica", price: "R$ 19,97 • pagamento único",
    headline: "Tudo bem se você já tem seus contratos. Mas e a primeira sessão — a mais tensa de todas?",
    sub: "Pack de Anamnese Lúdica — só as fichas de avaliação inicial, por R$ 19,97. Oferta única, só nesta tela.",
    intro: "Recusou o kit completo, entendemos. Então leve apenas a parte que mais trava: o primeiro encontro com os pais e a criança, quando você precisa coletar tudo sem transformar a conversa em interrogatório.",
    bullets: ["Ficha de anamnese completa e editável", "Roteiro da primeira conversa com os pais — o que perguntar e em qual ordem", "Linguagem acolhedora — colete dados sem fazer os pais se sentirem avaliados", "Pronta para imprimir ou preencher no tablet"],
    objection: { q: "\u201cPor que pagar por um pedaço do kit?\u201d", a: "Porque é o documento que você usa com 100% dos seus pacientes desde a sessão 1. E R$ 19,97 se pagam na primeira anamnese que você não redigir do zero." },
    cta: "QUERO A PRIMEIRA SESSÃO DESTRAVADA", link: "https://pay.cakto.com.br/sjt72ok", seal: S,
    decline: { text: "Não, obrigado — continuar sem o pack de anamnese", to: "/u2" } },
  u2: { kind: "u2", title: "Pack Especialista TEA, TDAH e TOD", price: "R$ 37,00 • pagamento único",
    headline: "O ArtKids vai te ajudar com 80% das crianças. Mas e os 20% que ninguém te preparou para atender?",
    sub: "Pack Especialista TEA, TDAH e TOD — 100 atividades para crianças neurodivergentes e opositoras, por R$ 37,00. Oferta única, só nesta tela.",
    intro: "Todo terapeuta infantil conhece a cena: a criança com TDAH severo que não sustenta 5 minutos de atividade, ou a com TOD que recusa tudo que você propõe. Este pack foi feito exatamente para esses dias.",
    bullets: ["100 atividades selecionadas para o perfil neurodivergente e opositor", "Organizadas por perfil (TEA, TDAH, TOD) e por objetivo da sessão", "Instruções de aplicação — como adaptar quando a criança não colabora", "Menos sessões \u201ctravadas\u201d — nunca mais abra o consultório sem um plano para o caso difícil", "Acesso imediato junto com o ArtKids"],
    objection: { q: "\u201cJá tenho atividades suficientes…\u201d", a: "Você tem atividades para a maioria. O problema nunca é a maioria: é aquele paciente das 16h de terça que não quer colaborar de jeito nenhum. É para ele que existem estas 100 atividades." },
    cta: "QUERO ESTAR PRONTA PARA O CASO DIFÍCIL", link: "https://pay.cakto.com.br/ntkxgzb", seal: S,
    decline: { text: "Não, obrigado — continuar sem o pack especialista", to: "/dw2" } },
  d2: { kind: "d2", title: "SOS Crises: Guia de Intervenção Rápida", price: "R$ 19,67 • pagamento único",
    headline: "Não quer o pacote completo agora? Leve ao menos o manual de emergência.",
    sub: "SOS Crises: Guia de Intervenção Rápida — o passo a passo para conduzir a criança na desregulação, por R$ 19,67. Oferta única, só nesta tela.",
    intro: "Sem as 100 atividades, sem módulos, sem extras. Só o que você precisa para não travar quando uma criança entra em crise de choro ou agressividade na sua frente — e a mãe está olhando.",
    bullets: ["Protocolo passo a passo de acolhimento na crise (o que fazer nos primeiros 2 minutos)", "O que dizer — e o que NUNCA dizer — durante a desregulação", "Como envolver os pais sem parecer que você perdeu o controle da sessão", "Formato e-book: abra no celular na hora da crise, se precisar"],
    objection: { q: "\u201cUm guia só, vale a pena?\u201d", a: "Uma crise mal conduzida custa mais que dinheiro: custa a confiança dos pais e às vezes o próprio caso. R$ 19,67 é o preço de nunca mais reagir por impulso." },
    cta: "QUERO O MANUAL DE EMERGÊNCIA", link: "https://pay.cakto.com.br/owsjz9x", seal: S,
    decline: { text: "Não, obrigado — continuar sem o guia de emergência", to: "/u3" } },
  u3: { kind: "u3", title: "Clube ArtKids (Assinatura VIP)", price: "R$ 5 nos primeiros 30 dias • depois R$ 29,90/mês",
    headline: "Seu acervo atual é ótimo. Mas as crianças crescem — e as sessões continuam.",
    sub: "Clube ArtKids: 15 novas atividades temáticas todo mês + estudos de caso, no seu bolso por R$ 5 nos primeiros 30 dias. Depois, R$ 29,90/mês. Oferta única, só nesta tela.",
    intro: "O acervo que você acabou de comprar resolve hoje. O Clube garante que você nunca mais fique sem tema: todo mês, conteúdo novo, pronto e contextualizado com o que as crianças estão vivendo.",
    bullets: ["15 novas atividades temáticas por mês — Natal, volta às aulas, bullying, luto, novas escolas…", "Sempre alinhado ao calendário real dos seus pacientes", "Estudos de caso — veja como outras terapeutas aplicam as atividades", "Você apaga a tarefa \u201cpesquisar atividade nova\u201d da sua semana para sempre", "Primeiros 30 dias por R$ 5 — teste o Clube pelo preço de um café"],
    objection: { q: "\u201cAssinatura me preocupa…\u201d", a: "Por isso o primeiro mês é R$ 5, e você decide antes do primeiro débito cheio chegar. Sem fidelidade: cancele quando quiser, em 2 minutos, direto na plataforma. Você só fica se ele estiver entregando novidades que você usa." },
    cta: "QUERO NOVIDADES TODO MÊS SEM PESQUISAR NADA", link: "https://pay.cakto.com.br/378jrxa", seal: S + " • Cancelamento fácil",
    decline: { text: "Não, obrigado — continuar sem o Clube ArtKids", to: "/dw3" } },
  d3: { kind: "d3", title: "Passe Anual de Atualizações", price: "R$ 77 • pagamento único",
    headline: "Eu entendo: assinatura mensal não é para todo mundo. Então leve o ano inteiro de uma vez.",
    sub: "Passe Anual de Atualizações — 12 meses de atividades novas do Clube, com um único pagamento de R$ 77 e zero recorrência. Oferta única, só nesta tela.",
    intro: "Você quer as novidades mensais, mas sem débito aparecendo no cartão todo mês. O Passe Anual resolve: todas as atualizações do ano, liberadas de uma vez, para sempre suas.",
    bullets: ["12 meses de atualizações do Clube já prontas", "Pagamento único de R$ 77 — nada se repete no seu cartão", "Equivale a menos de R$ 6,50/mês — contra R$ 29,90 do plano mensal", "Acesso imediato a todo o pacote anual, no seu ritmo"],
    objection: { q: "\u201cPrefiro pagar uma vez e pronto.\u201d", a: "É exatamente por isso que este Passe existe: uma cobrança, um ano de novidades, e nunca mais você pensa nisso. Sem renovação automática — quando o ano acabar, você decide se quer mais." },
    cta: "QUERO O ANO INTEIRO COM PAGAMENTO ÚNICO", link: "https://pay.cakto.com.br/5vixp9b", seal: S + " • Sem renovação automática",
    decline: { text: "Continuar apenas com o ArtKids", href: "https://artkids.idealizandoinfo.site/" } },
};
