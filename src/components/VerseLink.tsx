type VerseLinkProps = {
  verse: string,
  codeVerse: string
}

const VerseLink = (props: VerseLinkProps) => {
  const { verse, codeVerse } = props;

  const linkVerse = import.meta.env.VITE_PREFIX_VER_BIBBIA_NR06 + codeVerse + "." + import.meta.env.VITE_SUFFIX_VER_BIBBIA_NR06

  return <>
  <a href={linkVerse} target="_blank">{verse}</a>
  </>
}

export default VerseLink;