import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  Button,
  Code,
  ColorSample,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Heading2,
  NumberData,
  PageContent,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import { FormFieldTextbox } from '/src/components/FormFieldTextbox';
import Color from 'color';
import React from 'react';

export const parseColor = (colorString: string) => {
  let query = String(colorString || '')
    .trim()
    .toLowerCase();

  // Parse colors such as `fff` and `ffffff`
  const HEX = /^\s*([0-9a-f]{3,6})\s*$/i;
  if (HEX.test(query)) {
    query = query.replace(HEX, '#$1');
  }

  let color;

  // Parse colors such as `hsl(0deg 0% 20%)`
  try {
    color = Color(query);
  } catch (e) {
    color = null;
  }

  console.log('color', query, color);
  return color;
};

const ContrastPage = () => {
  const { siteConfig } = useDocusaurusContext();
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const backgroundColor = params.get('background-color');
  const color = params.get('color');

  const parsedBackgroundColor = parseColor(backgroundColor);
  const parsedColor = parseColor(color);

  const contrastRatio = !!parsedBackgroundColor && !!parsedColor ? parsedBackgroundColor.contrast(parsedColor) : null;

  const recommendations = [
    {
      positive: true,
      result: contrastRatio >= 3,
      content: <>Je mag de kleuren voor iconen gebruiken, als je wilt voldoen aan WCAG 2.2 AA niveau.</>,
    },
    {
      positive: true,
      result: contrastRatio >= 3,
      content: <>Je mag de kleuren gebruiken voor tekst groter dan 24px, als je wilt voldoen aan WCAG 2.2 AA niveau.</>,
    },
    {
      positive: true,
      result: contrastRatio >= 3,
      content: (
        <>
          Je mag de kleuren gebruiken voor vette tekst (<Code>font-weight: bold</Code>) groter dan 18.5px, als je wilt
          voldoen aan WCAG 2.2 AA niveau.
        </>
      ),
    },
    {
      positive: true,
      result: contrastRatio >= 4.5,
      content: <>Je mag de kleuren gebruiken voor alle tekst, als je wilt voldoen aan WCAG 2.2 AA niveau.</>,
    },
    {
      positive: true,
      result: contrastRatio >= 7,
      content: <>Je mag de kleuren gebruiken voor tekst, als je wilt voldoen aan WCAG 2.2 AAA niveau.</>,
    },
    {
      positive: false,
      result: contrastRatio >= 3,
      content: <>Je mag de kleuren niet voor iconen gebruiken, hiermee voldoe je niet aan WCAG 2.2 AA niveau.</>,
    },
    {
      positive: false,
      result: contrastRatio >= 4.5,
      content: <>Je mag de kleuren niet gebruiken voor tekst, hiermee voldoe je niet aan WCAG 2.2 AA niveau.</>,
    },
    {
      positive: false,
      result: contrastRatio >= 7,
      content: <>Je mag de kleuren niet gebruiken voor tekst, als je wilt voldoen aan WCAG 2.2 AAA niveau.</>,
    },
  ];

  const dos = recommendations.filter(({ result, positive }) => positive && result === positive);
  const donts = recommendations.filter(({ result, positive }) => !positive && result === positive);

  return (
    <Layout title={`${siteConfig.title} - homepage`}>
      <PageContent
        style={{
          '--utrecht-space-around': 1,
          'max-inline-size': '600px',
        }}
      >
        <Heading1>Contrast van kleuren</Heading1>
        <Paragraph lead>
          Vul de CSS-kleurcodes in van twee kleuren, en controleer voor welke toepassingen je de combinatie kunt
          gebruiken.
        </Paragraph>
        <form method="get">
          <FormFieldTextbox
            name="background-color"
            label={<Code>background-color</Code>}
            defaultValue={backgroundColor}
            style={{
              '--utrecht-textbox-font-family': 'var(--utrecht-code-font-family)',
            }}
          />
          <FormFieldTextbox
            name="color"
            defaultValue={color}
            label={<Code>color</Code>}
            style={{
              '--utrecht-textbox-font-family': 'var(--utrecht-code-font-family)',
            }}
          />
          <Button type="submit" appearance="primary-action-button">
            Contrast berekenen
          </Button>
          {typeof contrastRatio === 'number' && (
            <div>
              <Heading2 id="output">Resultaat</Heading2>
              <DataList>
                <DataListItem>
                  <DataListKey>Contrast ratio</DataListKey>
                  <DataListValue>
                    <NumberData>
                      {new Intl.NumberFormat('nl', { maximumSignificantDigits: 3 }).format(contrastRatio)} ÷ 1
                    </NumberData>
                  </DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>Achtergrond:</DataListKey>
                  <DataListValue>
                    <ColorSample color={backgroundColor} /> <Code>{backgroundColor}</Code>
                  </DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>Voorgrond:</DataListKey>
                  <DataListValue>
                    <ColorSample color={color} /> <Code>{color}</Code>
                  </DataListValue>
                </DataListItem>
              </DataList>

              {dos.length > 0 && (
                <>
                  <Paragraph>Gebruik deze kleuren voor bijvoorbeeld:</Paragraph>
                  <UnorderedList>
                    {dos.map(({ content }, index) => (
                      <UnorderedListItem key={index}>{content}</UnorderedListItem>
                    ))}
                  </UnorderedList>
                </>
              )}
              {donts.length > 0 && (
                <>
                  <Paragraph>
                    Deze kleuren moet je <strong>niet gebruiken</strong> voor:
                  </Paragraph>
                  <UnorderedList>
                    {donts.map(({ content }, index) => (
                      <UnorderedListItem key={index}>{content}</UnorderedListItem>
                    ))}
                  </UnorderedList>
                </>
              )}
            </div>
          )}
        </form>
      </PageContent>
    </Layout>
  );
};

export default ContrastPage;
