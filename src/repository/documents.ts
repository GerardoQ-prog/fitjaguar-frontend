import { ToolDocument } from "@/components/containers/cards-tool-documents";
import { http } from "./http";

export const documentsRepository = {
  getDocuments: async () => {
    const data = await http.get<ToolDocument[]>(
      "https://fitjaguar-dev-0c4fb566c3ca.herokuapp.com/document-file"
    );
    return data;
  },
};
