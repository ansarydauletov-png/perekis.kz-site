import { useMemo, useState } from 'react'
import Section from '../layout/Section'
import { calculatorCopy } from '../../data/content'

function RangeField({ label, value, min, max, step, onChange, limitMin, limitMax }) {
  return (
    <label className="t-calc-range">
      <span className="t-calc-range__head">
        <span>{label}</span>
        <strong>{value}</strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className="t-calc-range__limits">
        {limitMin} {limitMax}
      </span>
    </label>
  )
}

function DosageRange({ label, value, min, max, onChange, limitMin, limitMax }) {
  return (
    <label className="t-calc-range">
      <span className="t-calc-range__head">
        <span>{label}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className="t-calc-range__value">{value}</span>
      <span className="t-calc-range__limits">
        {limitMin} {limitMax}
      </span>
    </label>
  )
}

export default function CalculatorSection() {
  const [length, setLength] = useState(10)
  const [width, setWidth] = useState(5)
  const [squareDepth, setSquareDepth] = useState(2)

  const [diameter, setDiameter] = useState(8)
  const [roundDepth, setRoundDepth] = useState(2)

  const [rate37, setRate37] = useState(50)
  const [rate60, setRate60] = useState(50)

  const squareVolume = useMemo(() => Math.round(length * width * squareDepth), [length, width, squareDepth])
  const roundVolume = useMemo(() => {
    const radius = diameter / 2
    return Math.round(Math.PI * radius * radius * roundDepth * 10) / 10
  }, [diameter, roundDepth])

  const totalFromRate37 = useMemo(() => Math.round((squareVolume * rate37) / 100), [squareVolume, rate37])
  const totalFromRate60 = useMemo(() => Math.round((squareVolume * rate60) / 100), [squareVolume, rate60])

  const copy = calculatorCopy

  return (
    <>
      <Section id="kall" title={copy.title} className="t-rec--calculator">
        <p className="t-calc-subtitle">{copy.squareTitle}</p>
        <div className="t-calc-panel">
          <RangeField label={copy.lengthLabel} value={length} min={0} max={10} step={1} onChange={setLength} limitMin="0м" limitMax="10м" />
          <RangeField label={copy.widthLabel} value={width} min={0} max={5} step={1} onChange={setWidth} limitMin="0м" limitMax="5м" />
          <RangeField label={copy.depthLabel} value={squareDepth} min={0} max={2} step={1} onChange={setSquareDepth} limitMin="0м" limitMax="2м" />
          <p className="t-calc-volume">
            {copy.volumeLabel} {squareVolume} {copy.volumeUnit}
          </p>
          <button type="button" className="t-btn t-btnflex t-btnflex--calc">
            {copy.consultation}
          </button>
        </div>
      </Section>

      <Section className="t-rec--calculator t-rec--calculator-round">
        <p className="t-calc-subtitle">{copy.roundTitle}</p>
        <div className="t-calc-panel">
          <RangeField label={copy.diameterLabel} value={diameter} min={0} max={8} step={1} onChange={setDiameter} limitMin="0м" limitMax="8м" />
          <RangeField label={copy.depthLabel} value={roundDepth} min={0} max={2} step={1} onChange={setRoundDepth} limitMin="0м" limitMax="2м" />
          <p className="t-calc-volume">
            {copy.volumeLabel} {roundVolume} {copy.volumeUnit}
          </p>
          <button type="button" className="t-btn t-btnflex t-btnflex--calc">
            {copy.consultation}
          </button>
        </div>
      </Section>

      <Section title={copy.dosageSectionTitle} className="t-rec--dosage">
        <div className="t-calc-panel">
          <DosageRange
            label={copy.dosage37Label}
            value={rate37}
            min={1}
            max={100}
            onChange={setRate37}
            limitMin={copy.rateLimitMin}
            limitMax={copy.rateLimitMax}
          />
          <p className="t-calc-volume">
            {copy.dosageTotalLabel} {totalFromRate37} {copy.dosageTotalUnit}
          </p>
          <button type="button" className="t-btn t-btnflex t-btnflex--calc">
            {copy.consultation}
          </button>
        </div>
      </Section>

      <Section className="t-rec--dosage t-rec--dosage-60">
        <div className="t-calc-panel">
          <DosageRange
            label={copy.dosage60Label}
            value={rate60}
            min={1}
            max={100}
            onChange={setRate60}
            limitMin={copy.rateLimitMin}
            limitMax={copy.rateLimitMax}
          />
          <p className="t-calc-volume">
            {copy.dosageTotalLabel} {totalFromRate60} {copy.dosageTotalUnit}
          </p>
          <button type="button" className="t-btn t-btnflex t-btnflex--calc">
            {copy.consultation}
          </button>
        </div>
      </Section>
    </>
  )
}
