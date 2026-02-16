import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PDFDocument } from 'pdf-lib';

const STORAGE_KEY = 'cs-character-sheet';

/* ─── Form State Shape ─── */

interface CharacterForm {
  /* Header */
  CharacterName: string;
  ClassLevel: string;
  Background: string;
  PlayerName: string;
  Race: string;
  Alignment: string;
  XP: string;

  /* Ability Scores */
  STR: string;
  STRmod: string;
  DEX: string;
  DEXmod: string;
  CON: string;
  CONmod: string;
  INT: string;
  INTmod: string;
  WIS: string;
  WISmod: string;
  CHA: string;
  CHAmod: string;

  /* Combat */
  AC: string;
  Initiative: string;
  Speed: string;
  HPMax: string;
  HPCurrent: string;
  HPTemp: string;
  HDTotal: string;
  HD: string;
  ProfBonus: string;
  Inspiration: string;

  /* Saving Throws */
  STStrength: string;
  STDexterity: string;
  STConstitution: string;
  STIntelligence: string;
  STWisdom: string;
  STCharisma: string;

  /* Skills */
  Acrobatics: string;
  Animal: string;
  Arcana: string;
  Athletics: string;
  Deception: string;
  History: string;
  Insight: string;
  Intimidation: string;
  Investigation: string;
  Medicine: string;
  Nature: string;
  Perception: string;
  Performance: string;
  Persuasion: string;
  Religion: string;
  SleightofHand: string;
  Stealth: string;
  Survival: string;
  Passive: string;

  /* Weapons */
  WpnName1: string;
  WpnAtk1: string;
  WpnDmg1: string;
  WpnName2: string;
  WpnAtk2: string;
  WpnDmg2: string;
  WpnName3: string;
  WpnAtk3: string;
  WpnDmg3: string;

  /* Large text blocks */
  AttacksSpellcasting: string;
  Equipment: string;
  ProficienciesLang: string;
  FeaturesAndTraits: string;
  PersonalityTraits: string;
  Ideals: string;
  Bonds: string;
  Flaws: string;

  /* Currency */
  CP: string;
  SP: string;
  EP: string;
  GP: string;
  PP: string;

  /* Page 2 — Appearance & Backstory */
  Age: string;
  Height: string;
  Weight: string;
  Eyes: string;
  Skin: string;
  Hair: string;
  Backstory: string;
  Allies: string;
  FactionName: string;
  FeatTraits2: string;
  Treasure: string;
}

const blank: CharacterForm = {
  CharacterName: '', ClassLevel: '', Background: '', PlayerName: '',
  Race: '', Alignment: '', XP: '',
  STR: '', STRmod: '', DEX: '', DEXmod: '', CON: '', CONmod: '',
  INT: '', INTmod: '', WIS: '', WISmod: '', CHA: '', CHAmod: '',
  AC: '', Initiative: '', Speed: '', HPMax: '', HPCurrent: '', HPTemp: '',
  HDTotal: '', HD: '', ProfBonus: '', Inspiration: '',
  STStrength: '', STDexterity: '', STConstitution: '',
  STIntelligence: '', STWisdom: '', STCharisma: '',
  Acrobatics: '', Animal: '', Arcana: '', Athletics: '', Deception: '',
  History: '', Insight: '', Intimidation: '', Investigation: '', Medicine: '',
  Nature: '', Perception: '', Performance: '', Persuasion: '', Religion: '',
  SleightofHand: '', Stealth: '', Survival: '', Passive: '',
  WpnName1: '', WpnAtk1: '', WpnDmg1: '',
  WpnName2: '', WpnAtk2: '', WpnDmg2: '',
  WpnName3: '', WpnAtk3: '', WpnDmg3: '',
  AttacksSpellcasting: '', Equipment: '', ProficienciesLang: '',
  FeaturesAndTraits: '', PersonalityTraits: '', Ideals: '', Bonds: '', Flaws: '',
  CP: '', SP: '', EP: '', GP: '', PP: '',
  Age: '', Height: '', Weight: '', Eyes: '', Skin: '', Hair: '',
  Backstory: '', Allies: '', FactionName: '', FeatTraits2: '', Treasure: '',
};

/*
 * Map from our form keys → exact PDF field names
 * (some PDF fields have trailing spaces or unusual casing)
 */
const PDF_FIELD_MAP: Record<string, string> = {
  CharacterName: 'CharacterName',
  ClassLevel: 'ClassLevel',
  Background: 'Background',
  PlayerName: 'PlayerName',
  Race: 'Race ',
  Alignment: 'Alignment',
  XP: 'XP',
  STR: 'STR',
  STRmod: 'STRmod',
  DEX: 'DEX',
  DEXmod: 'DEXmod ',
  CON: 'CON',
  CONmod: 'CONmod',
  INT: 'INT',
  INTmod: 'INTmod',
  WIS: 'WIS',
  WISmod: 'WISmod',
  CHA: 'CHA',
  CHAmod: 'CHamod',
  AC: 'AC',
  Initiative: 'Initiative',
  Speed: 'Speed',
  HPMax: 'HPMax',
  HPCurrent: 'HPCurrent',
  HPTemp: 'HPTemp',
  HDTotal: 'HDTotal',
  HD: 'HD',
  ProfBonus: 'ProfBonus',
  Inspiration: 'Inspiration',
  STStrength: 'ST Strength',
  STDexterity: 'ST Dexterity',
  STConstitution: 'ST Constitution',
  STIntelligence: 'ST Intelligence',
  STWisdom: 'ST Wisdom',
  STCharisma: 'ST Charisma',
  Acrobatics: 'Acrobatics',
  Animal: 'Animal',
  Arcana: 'Arcana',
  Athletics: 'Athletics',
  Deception: 'Deception ',
  History: 'History ',
  Insight: 'Insight',
  Intimidation: 'Intimidation',
  Investigation: 'Investigation ',
  Medicine: 'Medicine',
  Nature: 'Nature',
  Perception: 'Perception ',
  Performance: 'Performance',
  Persuasion: 'Persuasion',
  Religion: 'Religion',
  SleightofHand: 'SleightofHand',
  Stealth: 'Stealth ',
  Survival: 'Survival',
  Passive: 'Passive',
  WpnName1: 'Wpn Name',
  WpnAtk1: 'Wpn1 AtkBonus',
  WpnDmg1: 'Wpn1 Damage',
  WpnName2: 'Wpn Name 2',
  WpnAtk2: 'Wpn2 AtkBonus ',
  WpnDmg2: 'Wpn2 Damage ',
  WpnName3: 'Wpn Name 3',
  WpnAtk3: 'Wpn3 AtkBonus  ',
  WpnDmg3: 'Wpn3 Damage ',
  AttacksSpellcasting: 'AttacksSpellcasting',
  Equipment: 'Equipment',
  ProficienciesLang: 'ProficienciesLang',
  FeaturesAndTraits: 'Features and Traits',
  PersonalityTraits: 'PersonalityTraits ',
  Ideals: 'Ideals',
  Bonds: 'Bonds',
  Flaws: 'Flaws',
  CP: 'CP',
  SP: 'SP',
  EP: 'EP',
  GP: 'GP',
  PP: 'PP',
  Age: 'Age',
  Height: 'Height',
  Weight: 'Weight',
  Eyes: 'Eyes',
  Skin: 'Skin',
  Hair: 'Hair',
  Backstory: 'Backstory',
  Allies: 'Allies',
  FactionName: 'FactionName',
  FeatTraits2: 'Feat+Traits',
  Treasure: 'Treasure',
};

/* ─── Component ─── */

function loadSaved(): CharacterForm {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...blank, ...JSON.parse(raw) };
  } catch { /* corrupt data — start fresh */ }
  return { ...blank };
}

export default function CharacterSheetPage() {
  const [form, setForm] = useState<CharacterForm>(loadSaved);
  const [downloading, setDownloading] = useState(false);

  /* Auto-save to localStorage on every change */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const set = useCallback(
    (key: keyof CharacterForm) => (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => setForm((prev) => ({ ...prev, [key]: e.target.value })),
    [],
  );

  /* ── Download handler ── */
  async function handleDownload() {
    setDownloading(true);
    try {
      const res = await fetch('/5E_CharacterSheet_Fillable.pdf');
      const pdfBytes = await res.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const pdfForm = pdf.getForm();

      for (const [formKey, pdfFieldName] of Object.entries(PDF_FIELD_MAP)) {
        const value = form[formKey as keyof CharacterForm];
        if (!value) continue;
        try {
          const field = pdfForm.getTextField(pdfFieldName);
          field.setText(value);
        } catch {
          /* field not found — skip gracefully */
        }
      }

      /* Also fill CharacterName 2 on page 2 */
      if (form.CharacterName) {
        try {
          pdfForm.getTextField('CharacterName 2').setText(form.CharacterName);
        } catch { /* skip */ }
      }

      const filledBytes = await pdf.save();
      const blob = new Blob([filledBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = form.CharacterName
        ? `${form.CharacterName.replace(/\s+/g, '_')}_CharacterSheet.pdf`
        : 'CharacterSheet.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('PDF generation failed:', err);
      alert('Something went wrong generating the PDF. Please try again.');
    } finally {
      setDownloading(false);
    }
  }

  /* ── Render ── */
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span className="breadcrumbs__sep">/</span>
        <span className="breadcrumbs__current">Character Sheet</span>
      </div>

      <h1 className="page-title">Character Sheet</h1>
      <p className="page-subtitle">
        Fill in your character details below, then download as a completed PDF.
      </p>
      <hr className="article-divider" />

      <div className="cs-form">
        {/* ═══════ HEADER ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Character Info</h2>
          <div className="cs-grid cs-grid--header">
            <label className="cs-field cs-field--wide">
              <span className="cs-label">Character Name</span>
              <input className="cs-input" value={form.CharacterName} onChange={set('CharacterName')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Class & Level</span>
              <input className="cs-input" value={form.ClassLevel} onChange={set('ClassLevel')} placeholder="e.g. Engineer 3" />
            </label>
            <label className="cs-field">
              <span className="cs-label">Background</span>
              <input className="cs-input" value={form.Background} onChange={set('Background')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Player Name</span>
              <input className="cs-input" value={form.PlayerName} onChange={set('PlayerName')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Race</span>
              <input className="cs-input" value={form.Race} onChange={set('Race')} placeholder="Human / Auto" />
            </label>
            <label className="cs-field">
              <span className="cs-label">Alignment</span>
              <input className="cs-input" value={form.Alignment} onChange={set('Alignment')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Experience Points</span>
              <input className="cs-input" value={form.XP} onChange={set('XP')} />
            </label>
          </div>
        </section>

        {/* ═══════ ABILITY SCORES ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Ability Scores</h2>
          <div className="cs-grid cs-grid--abilities">
            {(['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'] as const).map((ab) => {
              const modKey = (ab === 'CHA' ? 'CHAmod' : `${ab}mod`) as keyof CharacterForm;
              return (
                <div key={ab} className="cs-ability">
                  <span className="cs-ability__label">{ab}</span>
                  <input
                    className="cs-input cs-input--score"
                    value={form[ab]}
                    onChange={set(ab)}
                    placeholder="10"
                  />
                  <input
                    className="cs-input cs-input--mod"
                    value={form[modKey]}
                    onChange={set(modKey)}
                    placeholder="+0"
                  />
                  <span className="cs-ability__mod-label">mod</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════ COMBAT ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Combat</h2>
          <div className="cs-grid cs-grid--combat">
            <label className="cs-field">
              <span className="cs-label">Armor Class</span>
              <input className="cs-input cs-input--center" value={form.AC} onChange={set('AC')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Initiative</span>
              <input className="cs-input cs-input--center" value={form.Initiative} onChange={set('Initiative')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Speed</span>
              <input className="cs-input cs-input--center" value={form.Speed} onChange={set('Speed')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Proficiency Bonus</span>
              <input className="cs-input cs-input--center" value={form.ProfBonus} onChange={set('ProfBonus')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Inspiration</span>
              <input className="cs-input cs-input--center" value={form.Inspiration} onChange={set('Inspiration')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">HP Maximum</span>
              <input className="cs-input cs-input--center" value={form.HPMax} onChange={set('HPMax')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Current HP</span>
              <input className="cs-input cs-input--center" value={form.HPCurrent} onChange={set('HPCurrent')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Temporary HP</span>
              <input className="cs-input cs-input--center" value={form.HPTemp} onChange={set('HPTemp')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Hit Dice Total</span>
              <input className="cs-input cs-input--center" value={form.HDTotal} onChange={set('HDTotal')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Hit Dice</span>
              <input className="cs-input cs-input--center" value={form.HD} onChange={set('HD')} placeholder="e.g. 3d10" />
            </label>
          </div>
        </section>

        {/* ═══════ SAVING THROWS ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Saving Throws</h2>
          <div className="cs-grid cs-grid--saves">
            {([
              ['STStrength', 'Strength'],
              ['STDexterity', 'Dexterity'],
              ['STConstitution', 'Constitution'],
              ['STIntelligence', 'Intelligence'],
              ['STWisdom', 'Wisdom'],
              ['STCharisma', 'Charisma'],
            ] as const).map(([key, label]) => (
              <label key={key} className="cs-field cs-field--inline">
                <input className="cs-input cs-input--small" value={form[key]} onChange={set(key)} placeholder="+0" />
                <span className="cs-label">{label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* ═══════ SKILLS ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Skills</h2>
          <div className="cs-grid cs-grid--skills">
            {([
              ['Acrobatics', 'Acrobatics (Dex)'],
              ['Animal', 'Animal Handling (Wis)'],
              ['Arcana', 'Arcana (Int)'],
              ['Athletics', 'Athletics (Str)'],
              ['Deception', 'Deception (Cha)'],
              ['History', 'History (Int)'],
              ['Insight', 'Insight (Wis)'],
              ['Intimidation', 'Intimidation (Cha)'],
              ['Investigation', 'Investigation (Int)'],
              ['Medicine', 'Medicine (Wis)'],
              ['Nature', 'Nature (Int)'],
              ['Perception', 'Perception (Wis)'],
              ['Performance', 'Performance (Cha)'],
              ['Persuasion', 'Persuasion (Cha)'],
              ['Religion', 'Religion (Int)'],
              ['SleightofHand', 'Sleight of Hand (Dex)'],
              ['Stealth', 'Stealth (Dex)'],
              ['Survival', 'Survival (Wis)'],
            ] as const).map(([key, label]) => (
              <label key={key} className="cs-field cs-field--inline">
                <input className="cs-input cs-input--small" value={form[key]} onChange={set(key)} placeholder="+0" />
                <span className="cs-label">{label}</span>
              </label>
            ))}
            <label className="cs-field cs-field--inline">
              <input className="cs-input cs-input--small" value={form.Passive} onChange={set('Passive')} placeholder="10" />
              <span className="cs-label">Passive Perception</span>
            </label>
          </div>
        </section>

        {/* ═══════ WEAPONS ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Attacks</h2>
          <div className="cs-weapons">
            <div className="cs-weapons__header">
              <span>Name</span><span>Atk Bonus</span><span>Damage / Type</span>
            </div>
            {([1, 2, 3] as const).map((n) => (
              <div key={n} className="cs-weapons__row">
                <input className="cs-input" value={form[`WpnName${n}` as keyof CharacterForm]} onChange={set(`WpnName${n}` as keyof CharacterForm)} />
                <input className="cs-input cs-input--center" value={form[`WpnAtk${n}` as keyof CharacterForm]} onChange={set(`WpnAtk${n}` as keyof CharacterForm)} />
                <input className="cs-input" value={form[`WpnDmg${n}` as keyof CharacterForm]} onChange={set(`WpnDmg${n}` as keyof CharacterForm)} />
              </div>
            ))}
          </div>
          <label className="cs-field" style={{ marginTop: '0.75rem' }}>
            <span className="cs-label">Additional Attacks & Spellcasting Notes</span>
            <textarea className="cs-textarea" rows={3} value={form.AttacksSpellcasting} onChange={set('AttacksSpellcasting')} />
          </label>
        </section>

        {/* ═══════ PERSONALITY ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Personality</h2>
          <div className="cs-grid cs-grid--personality">
            <label className="cs-field">
              <span className="cs-label">Personality Traits</span>
              <textarea className="cs-textarea" rows={3} value={form.PersonalityTraits} onChange={set('PersonalityTraits')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Ideals</span>
              <textarea className="cs-textarea" rows={3} value={form.Ideals} onChange={set('Ideals')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Bonds</span>
              <textarea className="cs-textarea" rows={3} value={form.Bonds} onChange={set('Bonds')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Flaws</span>
              <textarea className="cs-textarea" rows={3} value={form.Flaws} onChange={set('Flaws')} />
            </label>
          </div>
        </section>

        {/* ═══════ EQUIPMENT & PROFICIENCIES ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Equipment & Proficiencies</h2>
          <div className="cs-grid cs-grid--two">
            <label className="cs-field">
              <span className="cs-label">Equipment</span>
              <textarea className="cs-textarea" rows={6} value={form.Equipment} onChange={set('Equipment')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Other Proficiencies & Languages</span>
              <textarea className="cs-textarea" rows={6} value={form.ProficienciesLang} onChange={set('ProficienciesLang')} />
            </label>
          </div>
          <div className="cs-grid cs-grid--currency">
            {(['CP', 'SP', 'EP', 'GP', 'PP'] as const).map((c) => (
              <label key={c} className="cs-field">
                <span className="cs-label">{c}</span>
                <input className="cs-input cs-input--center" value={form[c]} onChange={set(c)} />
              </label>
            ))}
          </div>
        </section>

        {/* ═══════ FEATURES & TRAITS ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Features & Traits</h2>
          <label className="cs-field">
            <textarea className="cs-textarea" rows={6} value={form.FeaturesAndTraits} onChange={set('FeaturesAndTraits')} placeholder="Class features, racial traits, feats..." />
          </label>
        </section>

        {/* ═══════ APPEARANCE & BACKSTORY (PAGE 2) ═══════ */}
        <section className="cs-section">
          <h2 className="heading-2">Appearance & Backstory</h2>
          <div className="cs-grid cs-grid--appearance">
            <label className="cs-field">
              <span className="cs-label">Age</span>
              <input className="cs-input" value={form.Age} onChange={set('Age')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Height</span>
              <input className="cs-input" value={form.Height} onChange={set('Height')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Weight</span>
              <input className="cs-input" value={form.Weight} onChange={set('Weight')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Eyes</span>
              <input className="cs-input" value={form.Eyes} onChange={set('Eyes')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Skin</span>
              <input className="cs-input" value={form.Skin} onChange={set('Skin')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Hair</span>
              <input className="cs-input" value={form.Hair} onChange={set('Hair')} />
            </label>
          </div>
          <label className="cs-field" style={{ marginTop: '0.75rem' }}>
            <span className="cs-label">Backstory</span>
            <textarea className="cs-textarea" rows={6} value={form.Backstory} onChange={set('Backstory')} />
          </label>
          <div className="cs-grid cs-grid--two" style={{ marginTop: '0.75rem' }}>
            <label className="cs-field">
              <span className="cs-label">Allies & Organizations</span>
              <textarea className="cs-textarea" rows={4} value={form.Allies} onChange={set('Allies')} />
            </label>
            <label className="cs-field">
              <span className="cs-label">Additional Features & Traits</span>
              <textarea className="cs-textarea" rows={4} value={form.FeatTraits2} onChange={set('FeatTraits2')} />
            </label>
          </div>
          <label className="cs-field" style={{ marginTop: '0.75rem' }}>
            <span className="cs-label">Treasure</span>
            <textarea className="cs-textarea" rows={3} value={form.Treasure} onChange={set('Treasure')} />
          </label>
        </section>

        {/* ═══════ ACTIONS ═══════ */}
        <div className="cs-actions">
          <button className="cs-btn cs-btn--download" onClick={handleDownload} disabled={downloading}>
            {downloading ? 'Generating PDF…' : 'Download Character Sheet PDF'}
          </button>
          <button className="cs-btn cs-btn--clear" onClick={() => { localStorage.removeItem(STORAGE_KEY); setForm({ ...blank }); }}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
