import {StyleSheet, View} from '@react-pdf/renderer';
import React from 'react';
import {Header} from './header/Header';
import {EducationSection} from './sections/EducationSection';
import {ProjectsSection} from './sections/ProjectsSection';
import {SkillsSection} from './sections/SkillsSection';
import {WorkExperienceSection} from './sections/WorkExperienceSection';

export function CvContent() {
  return (
    <React.Fragment>
      <Header />

      <View>
        <WorkExperienceSection />
        <ProjectsSection containerStyle={styles.section} />
        <EducationSection containerStyle={styles.section} />
        <SkillsSection containerStyle={styles.section} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: '0.2cm',
  },
});
