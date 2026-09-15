import type { DictionaryShape } from "./en-US";

const homePage = {
	"home.hero.eyebrow": "最終更新",
	"home.hero.role": "ソフトウェアエンジニア",
	"home.hero.subheading":
		"ユーザーが触れるインターフェースから、それを支えるアーキテクチャまで——どちらも自分の手で作り、スケールすることを前提に設計しています。",
	"home.hero.seemore": "もっと見る",
	"home.hero.cta.primary": "レジュメを見る",
	"home.hero.cta.secondary": "連絡する",

	"home.projects.eyebrow": "01 / 制作実績",
	"home.projects.title": "プロジェクト",
	"home.projects.description":
		"これまでに作ってきたものの一部です。どれも、実際に解決したかった課題から生まれました。",
	"home.projects.cta": "すべてのプロジェクトを見る",

	"home.skills.eyebrow": "02 / 専門分野",
	"home.skills.title": "スキル",
	"home.skills.description":
		"Web、モバイル、バックエンドを中心に、課題があればどこにでも手を伸ばします。新しい技術を見ると放っておけない性分で、今も学び続けています。",

	"home.contact.eyebrow": "03 / お問い合わせ",
	"home.contact.title": "お問い合わせ",
	"home.contact.description":
		"プロジェクトの相談、質問、ちょっとした挨拶でも大歓迎です。いつでもご連絡ください。",
	"home.contact.cta.email": "メールを送る",
	"home.contact.cta.linkedin": "LinkedInで繋がる",
};

export const ja = {
	"home.title": "Rifki Muhazzar — ソフトウェアエンジニア",
	"home.description":
		"ソフトウェアエンジニア、Rifki Muhazzarのポートフォリオ。企画から実装まで一貫して手がけるのが好きです。プロジェクトやスキル、連絡先をご覧ください。",

	"header.nav.projects": "プロジェクト",
	"header.nav.skills": "スキル",
	"header.nav.contact": "お問い合わせ",
	"header.theme.system": "システム",
	"header.theme.light": "ライト",
	"header.theme.dark": "ダーク",

	"footer.copyright": "Rifki Muhazzar. 無断転載を禁じます。",

	...homePage,
} as const satisfies DictionaryShape;
