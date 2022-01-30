import ArrowButtonBack from "@components/ArrowButtonBack";
import useSimpleForm from "@hooks/useSimpleForm";
import React from "react";

import { FaSave } from "react-icons/fa";
import { ProfileContainer } from "../styles";
import * as sc from "./styles";
const FormAlerts = () => {
  const { handleChangeValues, sendValues, formValues } = useSimpleForm();

  return (
    <ProfileContainer>
      <sc.FormContainer>
        <sc.BtnBackContainer>
          <ArrowButtonBack route={-1} />
        </sc.BtnBackContainer>
        <sc.TableChecksContainer>
          <sc.TitlesChecks>Esquema de Intervención</sc.TitlesChecks>
          <sc.ChecksContainer>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="modifyDosis"
                checked={formValues.modifyDosis}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="modifyDosis"></sc.LabelInput>
              <p>Modificar la dosis</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="dosification"
                checked={formValues.dosification}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="dosification"></sc.LabelInput>
              <p>Modificar la dosificación</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="adminPuat"
                checked={formValues.adminPuat}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="adminPuat"></sc.LabelInput>
              <p>Modificar la pauta de administración</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="addMed"
                checked={formValues.addMed}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="addMed"></sc.LabelInput>
              <p>Añadir un medicamento</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="resMed"
                checked={formValues.resMed}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="resMed"></sc.LabelInput>
              <p>Retirar un medicamento</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="susMed"
                checked={formValues.susMed}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="susMed"></sc.LabelInput>
              <p>Sustituir un medicamento</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="educateMed"
                checked={formValues.educateMed}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="educateMed"></sc.LabelInput>
              <p>Educar en el uso del medicamento</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="modifyApt"
                checked={formValues.modifyApt}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="modifyApt"></sc.LabelInput>
              <p>Modificar aptitudes respecto al tratamiento</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="educateMedities"
                checked={formValues.educateMedities}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="educateMedities"></sc.LabelInput>
              <p>Educar en medidas no farmacológicas</p>
            </sc.CkecksItems>
            <sc.CkecksItems>
              <input
                type="checkbox"
                id="remMed"
                checked={formValues.remMed}
                onChange={(e) => handleChangeValues(e)}
              />
              <sc.LabelInput htmlFor="remMed"></sc.LabelInput>
              <p>
                No esta clara: Se remite al médico para que éste valore la
                situación del paciente y lleve a cabo la acción más adecuada.
              </p>
            </sc.CkecksItems>
          </sc.ChecksContainer>
        </sc.TableChecksContainer>

        <sc.GridContainer>
          <sc.TableChecksContainer>
            <sc.TitlesChecks>Resultado negativo Identificado</sc.TitlesChecks>
            <sc.ChecksContainer>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="medicalProbleNotTrated"
                  checked={formValues.medicalProbleNotTrated}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="medicalProbleNotTrated"></sc.LabelInput>
                <p>Problema de salud no tratado</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="medicalEfectInnecesary"
                  checked={formValues.medicalEfectInnecesary}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="medicalEfectInnecesary"></sc.LabelInput>
                <p>Efecto de medicamento innecesario</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="inefectivityNoct"
                  checked={formValues.inefectivityNoct}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="inefectivityNoct"></sc.LabelInput>
                <p>Inefectividad NO cuantitativa</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="inefectivityyCt"
                  checked={formValues.inefectivityyCt}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="inefectivityyCt"></sc.LabelInput>
                <p>Inefectividad cuantitativa</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="insegurityNoCt"
                  checked={formValues.insegurityNoCt}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="insegurityNoCt"></sc.LabelInput>
                <p>Inseguridad NO cuantitativa</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="insegurityCt"
                  checked={formValues.insegurityCt}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="insegurityCt"></sc.LabelInput>
                <p>Inseguridad cuantitativa</p>
              </sc.CkecksItems>
            </sc.ChecksContainer>
          </sc.TableChecksContainer>
          <sc.TableChecksContainer height="100%">
            <sc.TitlesChecks>Causa</sc.TitlesChecks>
            <sc.ChecksContainer>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="interactionFarmaco"
                  checked={formValues.interactionFarmaco}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="interactionFarmaco"></sc.LabelInput>
                <p>Interacción farmacológica</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="duplicityFarmaco"
                  checked={formValues.duplicityFarmaco}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="duplicityFarmaco"></sc.LabelInput>
                <p>Duplicidad farmacológica</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="quantityMedSolicityNoCtD"
                  checked={formValues.quantityMedSolicityNoCtD}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="quantityMedSolicityNoCtD"></sc.LabelInput>
                <p>Cantidad de medicamento solicitado no corresponde a dosis</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="sobredosification"
                  checked={formValues.sobredosification}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="sobredosification"></sc.LabelInput>
                <p>Sobredosificación</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="subDosification"
                  checked={formValues.subDosification}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="subDosification"></sc.LabelInput>
                <p>Subdosificación</p>
              </sc.CkecksItems>
            </sc.ChecksContainer>
          </sc.TableChecksContainer>
        </sc.GridContainer>
        <sc.GridContainer>
          <sc.TableChecksContainer>
            <sc.TitlesChecks>Vida de comunicación</sc.TitlesChecks>
            <sc.ChecksContainer>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="writedToPatient"
                  checked={formValues.writedToPatient}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="writedToPatient"></sc.LabelInput>
                <p>Escrita para el paciente</p>
              </sc.CkecksItems>
              <sc.CkecksItems>
                <input
                  type="checkbox"
                  id="writedToMed"
                  checked={formValues.writedToMed}
                  onChange={(e) => handleChangeValues(e)}
                />
                <sc.LabelInput htmlFor="writedToMed"></sc.LabelInput>
                <p>Escrita para el médico</p>
              </sc.CkecksItems>
            </sc.ChecksContainer>
          </sc.TableChecksContainer>
          <sc.TableChecksContainer>
            <sc.TitlesChecks>Resultado</sc.TitlesChecks>
            <sc.GridContainer>
              <sc.ChecksContainer>
                <sc.CkecksItems>
                  <input
                    type="checkbox"
                    id="acepted"
                    checked={formValues.acepted}
                    onChange={(e) => handleChangeValues(e)}
                  />
                  <sc.LabelInput htmlFor="acepted"></sc.LabelInput>
                  <p>Aceptado</p>
                </sc.CkecksItems>
                <sc.CkecksItems>
                  <input
                    type="checkbox"
                    id="noAcepted"
                    checked={formValues.noAcepted}
                    onChange={(e) => handleChangeValues(e)}
                  />
                  <sc.LabelInput htmlFor="noAcepted"></sc.LabelInput>
                  <p>No aceptado</p>
                </sc.CkecksItems>
              </sc.ChecksContainer>
              <sc.ChecksContainer>
                <sc.CkecksItems>
                  <input
                    type="checkbox"
                    id="ejecuted"
                    checked={formValues.ejecuted}
                    onChange={(e) => handleChangeValues(e)}
                  />
                  <sc.LabelInput htmlFor="ejecuted"></sc.LabelInput>
                  <p>Ejecutada</p>
                </sc.CkecksItems>
                <sc.CkecksItems>
                  <input
                    type="checkbox"
                    id="noEjecuted"
                    checked={formValues.noEjecuted}
                    onChange={(e) => handleChangeValues(e)}
                  />
                  <sc.LabelInput htmlFor="noEjecuted"></sc.LabelInput>
                  <p>No ejecutada</p>
                </sc.CkecksItems>
              </sc.ChecksContainer>
            </sc.GridContainer>
          </sc.TableChecksContainer>
        </sc.GridContainer>
        <sc.BtnSave type="button" onClick={sendValues}>
          <FaSave size={17} />
          <p>Guardar</p>
        </sc.BtnSave>
      </sc.FormContainer>
    </ProfileContainer>
  );
};

export default FormAlerts;
