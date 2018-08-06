const Card = ({ name, children, image, hover, link, classes }) => {
  return link ? (
    <a href={link}>
      <section
        className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n ${image ==
          undefined && "padding-lg"} ${hover != undefined &&
          "grow"} ${classes} ${name}`}
      >
        {children}
      </section>
    </a>
  ) : (
    <section
      className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n ${image ==
        undefined && "padding-lg"} ${hover != undefined && "grow"} ${name}`}
    >
      {children}
    </section>
  );
};

export default Card;
