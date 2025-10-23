"use client";

import styled from "styled-components";

const Container = styled.main`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  color: var(--foreground);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--yellow-photo);

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--gray-700);

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--foreground);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const FrenchText = styled.p`
  margin-bottom: 1rem;
  color: var(--foreground);
  font-size: 1rem;
  line-height: 1.8;
`;

const EnglishText = styled.p`
  margin-bottom: 1rem;
  color: var(--gray-400);
  font-size: 0.95rem;
  line-height: 1.8;
  font-style: italic;
`;

const StyledLink = styled.a`
  color: var(--yellow-photo);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--yellow-photo-hover);
    text-decoration: underline;
  }
`;

export default function LegalNotice() {
  return (
    <Container>
      <Title>Mentions légales / Legal Notice</Title>

      <Section>
        <SectionTitle>Éditeur du site / Website Publisher</SectionTitle>
        <FrenchText>
          Ce site est édité par <strong>John Eric Sánchez Suárez</strong>.<br />
          Basé à Bordeaux, France.
          <br />
          Email :{" "}
          <StyledLink href="mailto:jsanchezsua@ensc.fr">jsanchezsua@ensc.fr</StyledLink>
          <br />
          Statut : Entrepreneur individuel / freelance.
        </FrenchText>
        <EnglishText>
          This website is published by <strong>John Eric Sánchez Suárez</strong>.<br />
          Based in Bordeaux, France.
          <br />
          Email:{" "}
          <StyledLink href="mailto:jsanchezsua@ensc.fr">jsanchezsua@ensc.fr</StyledLink>
          <br />
          Status: Independent professional / freelancer.
        </EnglishText>
      </Section>

      <Section>
        <SectionTitle>Responsable de la publication / Publication Director</SectionTitle>
        <FrenchText>John Eric Sánchez Suárez</FrenchText>
      </Section>

      <Section>
        <SectionTitle>Hébergeur / Hosting Provider</SectionTitle>
        <FrenchText>
          Ce site est hébergé par <strong>GitHub Pages</strong>, un service de
          <strong> GitHub, Inc.</strong>
          <br />
          88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.
          <br />
          <StyledLink
            href="https://pages.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://pages.github.com
          </StyledLink>
        </FrenchText>
        <EnglishText>
          This site is hosted by <strong>GitHub Pages</strong>, a service provided by
          <strong> GitHub, Inc.</strong>
          <br />
          88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
          <br />
          <StyledLink
            href="https://pages.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://pages.github.com
          </StyledLink>
        </EnglishText>
      </Section>

      <Section>
        <SectionTitle>Propriété intellectuelle / Intellectual Property</SectionTitle>
        <FrenchText>
          L&apos;ensemble du contenu présent sur ce site (textes, images, code,
          graphismes) est la propriété exclusive de John Eric Sánchez Suárez, sauf mention
          contraire. Toute reproduction ou utilisation sans autorisation préalable est
          interdite.
        </FrenchText>
        <EnglishText>
          All content on this website (texts, images, code, graphics) is the exclusive
          property of John Eric Sánchez Suárez, unless stated otherwise. Any reproduction
          or use without prior authorization is prohibited.
        </EnglishText>
      </Section>

      <Section>
        <SectionTitle>Protection des données / Data Protection</SectionTitle>
        <FrenchText>
          Ce site ne collecte pas de données personnelles à des fins commerciales. Les
          informations transmises via le formulaire de contact sont utilisées uniquement
          pour répondre aux demandes et ne sont pas stockées ni partagées.
        </FrenchText>
        <EnglishText>
          This website does not collect personal data for commercial purposes. Information
          submitted through the contact form is used solely to respond to inquiries and is
          neither stored nor shared.
        </EnglishText>
      </Section>

      <Section>
        <SectionTitle>Contact</SectionTitle>
        <FrenchText>
          Pour toute question concernant ces mentions légales, vous pouvez écrire à{" "}
          <StyledLink href="mailto:jsanchezsua@ensc.fr">jsanchezsua@ensc.fr</StyledLink>.
        </FrenchText>
        <EnglishText>
          For any questions regarding this legal notice, please contact{" "}
          <StyledLink href="mailto:jsanchezsua@ensc.fr">jsanchezsua@ensc.fr</StyledLink>.
        </EnglishText>
      </Section>
    </Container>
  );
}
