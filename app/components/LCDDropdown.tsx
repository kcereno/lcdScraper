import React from 'react';
import { Form, useLoaderData, useSubmit } from '@remix-run/react';
import type { lcdDataType } from 'types';

export default function LCDDropdown() {
  const [selectedLCD, setSelectedLCD] = React.useState('');

  const submit = useSubmit();
  // const lcdData = useLoaderData<lcdDataType[]>();
  // console.log('LCDDropdown ~ lcdData:', lcdData);

  const lcdData = [
    {
      text: 'Ankle-Foot/Knee-Ankle-Foot Orthosis',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33686&ContrID=140',
    },
    {
      text: 'Automatic External Defibrillators',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33690&ContrID=140',
    },
    {
      text: 'Bowel Management Device',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=36267&ContrID=140',
    },
    {
      text: 'Canes and Crutches',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33733&ContrID=140',
    },
    {
      text: 'Cervical Traction Devices',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33823&ContrID=140',
    },
    {
      text: 'Cold Therapy',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33735&ContrID=140',
    },
    {
      text: 'Commodes',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33736&ContrID=140',
    },
    {
      text: 'Enteral Nutrition',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=38955',
    },
    {
      text: 'External Breast Prostheses',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33317&ContrID=140',
    },
    {
      text: 'External Infusion Pumps',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33794&ContrID=140',
    },
    {
      text: 'Eye Prostheses',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33737&ContrID=140',
    },
    {
      text: 'Facial Prostheses',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33738&ContrID=140',
    },
    {
      text: 'Glucose Monitors',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33822&ContrID=140',
    },
    {
      text: 'Heating Pads and Heat Lamps',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33784&ContrID=140',
    },
    {
      text: 'High Frequency Chest Wall Oscillation Devices',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33785&ContrID=140',
    },
    {
      text: 'Hospital Beds And Accessories',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33820&ContrID=140',
    },
    {
      text: 'Immunosuppressive Drugs',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?lcdid=33824',
    },
    {
      text: 'Infrared Heating Pad Systems',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33825&ContrID=140',
    },
    {
      text: 'Intrapulmonary Percussive Ventilation System',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33786&ContrID=140',
    },
    {
      text: 'Intravenous Immune Globulin',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33610&ContrID=140',
    },
    {
      text: 'Knee Orthoses',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33318&ContrID=140',
    },
    {
      text: 'Lower Limb Prostheses',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33787&ContrID=140',
    },
    {
      text: 'Manual Wheelchair Bases',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33788&ContrID=140',
    },
    {
      text: 'Mechanical In-exsufflation Devices',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33795&ContrID=140',
    },
    {
      text: 'Nebulizers',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33370&ContrID=140',
    },
    {
      text: 'Negative Pressure Wound Therapy Pumps',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33821&ContrID=140',
    },
    {
      text: 'Oral Anticancer Drugs',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33826&ContrID=140',
    },
    {
      text: 'Oral Antiemetic Drugs (Replacement for Intravenous Antiemetics)',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33827&ContrID=140',
    },
    {
      text: 'Oral Appliances for Obstructive Sleep Apnea',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33611&ContrID=140',
    },
    {
      text: 'Orthopedic Footwear',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33641&ContrID=140',
    },
    {
      text: 'Osteogenesis Stimulators',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33796&ContrID=140',
    },
    {
      text: 'Ostomy Supplies',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33828&ContrID=140',
    },
    {
      text: 'Oxygen and Oxygen Equipment',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33797&ContrID=140',
    },
    {
      text: 'Parenteral Nutrition',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=38953',
    },
    {
      text: 'Patient Lifts',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33799&ContrID=140',
    },
    {
      text: 'Pneumatic Compression Devices',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33829&ContrID=140',
    },
    {
      text: 'Positive Airway Pressure (PAP) Devices for the Treatment of Obstructive Sleep Apnea',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33718&ContrID=140',
    },
    {
      text: 'Power Mobility Devices',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33789&ContrID=140',
    },
    {
      text: 'Pressure Reducing Support Surfaces - Group 1',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33830&ContrID=140',
    },
    {
      text: 'Pressure Reducing Support Surfaces - Group 2',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33642&ContrID=140',
    },
    {
      text: 'Pressure Reducing Support Surfaces - Group 3',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33692&ContrID=140',
    },
    {
      text: 'Refractive Lenses',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33793&ContrID=140',
    },
    {
      text: 'Respiratory Assist Devices',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33800&ContrID=140',
    },
    {
      text: 'Seat Lift Mechanisms',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33801&ContrID=140',
    },
    {
      text: 'Speech Generating Devices',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33739&ContrID=140',
    },
    {
      text: 'Spinal Orthoses: TLSO and LSO',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33790&ContrID=140',
    },
    {
      text: 'Suction Pumps',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33612&ContrID=140',
    },
    {
      text: 'Surgical Dressings',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33831&ContrID=140',
    },
    {
      text: 'Therapeutic Shoes for Persons with Diabetes',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33369&ContrID=140',
    },
    {
      text: 'Tracheostomy Care Supplies',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33832&ContrID=140',
    },
    {
      text: 'Transcutaneous Electrical Joint Stimulation Devices (TEJSD)',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=34821&ContrID=140',
    },
    {
      text: 'Transcutaneous Electrical Nerve Stimulators (TENS)',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33802&ContrID=140',
    },
    {
      text: 'Tumor Treatment Field Therapy (TTFT)',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=34823&ContrID=140',
    },
    {
      text: 'Urological Supplies',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33803&ContrID=140',
    },
    {
      text: 'Vacuum Erection Devices (VED)',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=34824&ContrID=140',
    },
    {
      text: 'Walkers',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33791&ContrID=140',
    },
    {
      text: 'Wheelchair Options/Accessories',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33792&ContrID=140',
    },
    {
      text: 'Wheelchair Seating',
      url: 'https://www.cms.gov/medicare-coverage-database/details/lcd-details.aspx?LCDId=33312&ContrID=140',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({ url: selectedLCD }, { method: 'post' });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLCD(e.target.value);
  };

  return (
    <Form
      method="POST"
      className="flex w-1/2 gap-2 mx-auto my-10"
      onSubmit={handleSubmit}
    >
      <select
        className="w-full select select-bordered"
        name="url"
        onChange={handleSelect}
      >
        <option
          disabled
          selected
        >
          Select LCD
        </option>
        {lcdData!.map((lcd) => (
          <option
            key={lcd.text}
            value={lcd.url}
          >
            {lcd.text}
          </option>
        ))}
      </select>
      <button
        className="btn btn-secondary"
        type="submit"
      >
        Scrape
      </button>
    </Form>
  );
}
