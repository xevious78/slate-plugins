import { createHyperscript } from 'slate-hyperscript';
import { nodeTypes } from '../__fixtures__/initialValues.fixtures';
import { createText } from './hyperscript/creators';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
      editor: any;
      mention: any;
      actionitem: any;
      inline: any;
      htext: any;
    }
  }
}

export const jsx = createHyperscript({
  elements: {
    hp: { type: nodeTypes.typeP },
    hmention: { type: nodeTypes.typeMention },
    hblockquote: { type: nodeTypes.typeBlockquote },
    hcode: { type: nodeTypes.typeCodeBlock },
    ha: { type: nodeTypes.typeLink },
    himg: { type: nodeTypes.typeImg },
    hembed: { type: nodeTypes.typeMediaEmbed },
    hactionitem: { type: nodeTypes.typeActionItem },
    htable: { type: nodeTypes.typeTable },
    htr: { type: nodeTypes.typeTr },
    htd: { type: nodeTypes.typeTd },
    hul: { type: nodeTypes.typeUl },
    hol: { type: nodeTypes.typeOl },
    hli: { type: nodeTypes.typeLi },
    hh1: { type: nodeTypes.typeH1 },
    hh2: { type: nodeTypes.typeH2 },
    hh3: { type: nodeTypes.typeH3 },
    hh4: { type: nodeTypes.typeH4 },
    hh5: { type: nodeTypes.typeH5 },
    hh6: { type: nodeTypes.typeH6 },
    hcenter: { type: nodeTypes.typeAlignCenter },
    inline: { inline: true },
    block: {},
  },
  creators: {
    htext: createText,
  },
});
