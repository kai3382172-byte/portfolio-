import { CONFIG } from "./data";
import { useD, Ic, Rv, SecHead, Arr } from "./ui";

export function Certs() {
  const { d } = useD();
  return (
    <section className="sec" id="certs">
      <div className="wrap">
        <SecHead eb={d.ui.ctEb} icon="award" title={d.ui.ctT} sub={d.ui.ctS} />
        <div className="cert-grid">
          {d.certs.map((c, i) => (
            <Rv key={c.t} delay={i * 110} className="cert"
              style={{ "--c": c.c } as React.CSSProperties}>
              <span className="cert-ic" style={{ "--c": c.c, "--r": c.r } as React.CSSProperties}>
                <Ic n="award" s={26} sw={1.9} />
              </span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              <a className="b-link" href={CONFIG.driveCerts} target="_blank" rel="noopener">
                {d.ui.openLink}<Arr s={15} />
              </a>
            </Rv>
          ))}
        </div>
        <Rv delay={150} className="drive-card">
          <div className="tt">
            <span className="cert-ic"><Ic n="folder" s={26} sw={1.9} /></span>
            <div>
              <h3>{d.ui.driveT}</h3>
              <p>{d.ui.driveP}</p>
            </div>
          </div>
          <a className="btn" href={CONFIG.driveAll} target="_blank" rel="noopener">
            {d.ui.driveB}<Arr s={16} />
          </a>
        </Rv>
      </div>
    </section>
  );
}

export function Education() {
  const { d } = useD();
  return (
    <section className="sec alt" id="education">
      <div className="wrap">
        <SecHead eb={d.ui.edEb} icon="cap" title={d.ui.edT} sub={d.ui.edS} />
        <div className="edu-grid">
          {d.education.map((e, i) => (
            <Rv key={e.t} delay={i * 120} className="edu">
              <span className="cert-ic" style={{ "--c": e.c, "--r": e.r } as React.CSSProperties}>
                <Ic n={e.icon} s={28} sw={1.8} />
              </span>
              <h3>{e.t}</h3>
              <span className="deg" style={{ "--c": e.c } as React.CSSProperties}>
                <Ic n="cal" s={14} sw={2.1} />{e.deg}
              </span>
              <p>{e.d}</p>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
}
