const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        About the Workshop
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        This three-day workshop brings together water systems knowledge and hands-on data science to help participants work confidently with real-world water quality and monitoring challenges. You'll learn how water data is generated (treatment systems, sensors, monitoring), how it behaves in practice (missingness, noise, sampling gaps), and how to build analysis and models that are rigorous, interpretable, and useful for decision-making.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        The workshop is part of the <strong className="text-foreground">People's Water Data</strong> effort to enable better, data-driven understanding of water quality and related sustainability outcomes—by bridging field realities with reproducible ML workflows.
      </p>
    </div>
  </section>
);

export default AboutSection;
