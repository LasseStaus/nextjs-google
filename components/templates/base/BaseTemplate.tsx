export interface IBaseTemplate {
  sampleTextProp: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-sky-300 to to-blue-300">
      {sampleTextProp}
    </div>
  )
}

export default BaseTemplate
